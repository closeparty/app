import {  } from 'jasmine';
import { WalkthroughPage } from './walkthrough';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { NavController } from 'ionic-angular';

describe('Walkthrough Page:', () => {

    let comp: WalkthroughPage;
    let fixture: ComponentFixture<WalkthroughPage>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [WalkthroughPage],
            providers: [
                {provide: NavController, useValue: NavController},
            ],
        });
        fixture = TestBed.createComponent(WalkthroughPage);
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
