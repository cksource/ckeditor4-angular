/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorComponent } from './ckeditor.component';
let CKEditorModule = class CKEditorModule {
};
CKEditorModule = tslib_1.__decorate([
    NgModule({
        imports: [FormsModule, CommonModule],
        declarations: [CKEditorComponent],
        exports: [CKEditorComponent]
    })
], CKEditorModule);
export { CKEditorModule };
export * from './ckeditor';
export { CKEditorComponent } from './ckeditor.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2tlZGl0b3I0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJja2VkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU96RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQzFCLENBQUE7QUFEWSxjQUFjO0lBTDFCLFFBQVEsQ0FBRTtRQUNWLE9BQU8sRUFBRSxDQUFFLFdBQVcsRUFBRSxZQUFZLENBQUU7UUFDdEMsWUFBWSxFQUFFLENBQUUsaUJBQWlCLENBQUU7UUFDbkMsT0FBTyxFQUFFLENBQUUsaUJBQWlCLENBQUU7S0FDOUIsQ0FBRTtHQUNVLGNBQWMsQ0FDMUI7U0FEWSxjQUFjO0FBRTNCLGNBQWMsWUFBWSxDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMCwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDS0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2tlZGl0b3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKCB7XG5cdGltcG9ydHM6IFsgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgQ0tFZGl0b3JDb21wb25lbnQgXSxcblx0ZXhwb3J0czogWyBDS0VkaXRvckNvbXBvbmVudCBdXG59IClcbmV4cG9ydCBjbGFzcyBDS0VkaXRvck1vZHVsZSB7XG59XG5leHBvcnQgKiBmcm9tICcuL2NrZWRpdG9yJztcbmV4cG9ydCB7IENLRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9ja2VkaXRvci5jb21wb25lbnQnO1xuIl19