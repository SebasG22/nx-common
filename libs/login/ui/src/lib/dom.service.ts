import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Injectable()
export class DomService {
    private childComponentRef: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) { }

    // tslint:disable-next-line:no-shadowed-variable
    public appendComponentTo(parentId: string, child: any, childConfig?: childConfig) {
        // Create a component reference from the component
        const childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(child)
            .create(this.injector);

        // Attach the config to the child (inputs and outputs)
        this.attachConfig(childConfig, childComponentRef);

        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);

        // Get DOM element from component
        const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // Append DOM element to the body
        document.getElementById(parentId).appendChild(childDomElem);

        return childComponentRef;

    }

    private attachConfig(config, componentRef) {
        const inputs = config.inputs;
        const outputs = config.outputs;
        // tslint:disable-next-line:forin
        for (const key1 in inputs) {
            componentRef.instance[key1] = inputs[key1];
        }
        // tslint:disable-next-line:forin
        for (const key1 in outputs) {
            componentRef.instance[key1] = outputs[key1];
        }

    }

    public removeComponent() {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
    }


}

// tslint:disable-next-line:class-name
interface childConfig {
    inputs: object;
    outputs: object;
}