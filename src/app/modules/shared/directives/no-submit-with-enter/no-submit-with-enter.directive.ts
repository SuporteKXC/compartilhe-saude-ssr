import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSubmitWithEnter]'
})
export class NoSubmitWithEnterDirective {

	@HostListener('keydown', ['$event'])
	keyEvent(event: KeyboardEvent) {
		if (
      event.key == 'Enter' 
      && !event.ctrlKey 
      && !event.altKey 
      && !event.shiftKey
      && !(
        event.target instanceof HTMLButtonElement 
        || event.target instanceof HTMLLinkElement 
        || event.target instanceof HTMLTextAreaElement
      )) {
			event.preventDefault();
		}
	}
}
