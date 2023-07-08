import { ElementRef } from "@angular/core";

declare var M;

export interface MaterialInstance {
    open?(): void,
    close?(): void,
    destroy?(): void,
}

export interface MaterialDatePicker extends MaterialInstance {
    date?: Date,
}

export class MaterialService {
    static toast(message: string) {
        M.toast({html: message, classes: 'rounded purple darken-2'});
    }

    static initializeFloatingButton(ref: ElementRef) {
        M.FloatingActionButton.init(ref.nativeElement);
    }

    static updateTextInputs() {
        M.updateTextFields();
    }

    static initModal(ref: ElementRef): MaterialInstance {
        return M.Modal.init(ref.nativeElement);
    }

    static initTooltip(ref: ElementRef): MaterialInstance {
        return M.Tooltip.init(ref.nativeElement);
    }

    static initDatePicker(ref: ElementRef, onClose: () => void): MaterialDatePicker {
        return M.Datepicker.init(ref.nativeElement, {
            format: 'dd.mm.yyyy',
            showClearBtn: true,
            onClose
        });
    }

    static initTapTarget(ref: ElementRef): MaterialInstance {
        return M.TapTarget.init(ref.nativeElement);
    }

    static initParallax(ref: ElementRef): MaterialInstance {
        return M.Parallax.init(ref.nativeElement);
    }

    static initSidenav(ref: ElementRef): MaterialInstance {
        return M.Sidenav.init(ref.nativeElement, { draggable: true });
    }

    static initDropDown(ref: ElementRef): MaterialInstance {
        return M.Dropdown.init(ref.nativeElement, {coverTrigger: false});
    }

    static initCarousel(ref: ElementRef): MaterialInstance {
        return M.Carousel.init(ref.nativeElement, { duration: 350, padding: 100});
    }

    static initSlider(ref: ElementRef): MaterialInstance {
        return M.Slider.init(ref.nativeElement, {indicators: true, interval: 3000});
    }

    static initTabs(ref: ElementRef): MaterialInstance {
        return M.Tabs.init(ref.nativeElement, { swipeable: true });
    }
    static initCollapsible(ref: ElementRef): MaterialInstance {
        return M.Collapsible.init(ref.nativeElement);
    }
}