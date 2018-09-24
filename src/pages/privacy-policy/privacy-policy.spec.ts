import {  } from 'jasmine';
import { PrivacyPolicyPage } from './privacy-policy';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ViewController } from 'ionic-angular';

describe('Privacy Policy Page:', () => {

    let comp: PrivacyPolicyPage;
    let fixture: ComponentFixture<PrivacyPolicyPage>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [PrivacyPolicyPage],
            providers: [
                {provide: ViewController, useValue: ViewController},
            ],
        });
        fixture = TestBed.createComponent(PrivacyPolicyPage);
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
