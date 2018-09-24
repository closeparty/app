import { } from 'jasmine';
import { TermsOfServicePage } from './terms-of-service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ViewController } from 'ionic-angular';

describe('Terms of Service Page:', () => {

    let comp: TermsOfServicePage;
    let fixture: ComponentFixture<TermsOfServicePage>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [TermsOfServicePage],
            providers: [
                { provide: ViewController, useValue: ViewController },
            ],
        });
        fixture = TestBed.createComponent(TermsOfServicePage);
        // #trick
        // If you want to trigger ionViewWillEnter automatically de-comment the following line
        // fixture.componentInstance.ionViewWillEnter();
        fixture.detectChanges();
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });

    describe('.constructor()', () => {
        it('Should be defined', () => {
            expect(comp).toBeDefined();
        });
    });
});
