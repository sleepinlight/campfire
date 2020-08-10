import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeEngineService } from '../shared/theme-engine/theme-engine.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	title = 'campfire';

	constructor(private themer: ThemeEngineService) {
		this.themer.setBackground('bg-theme-pine');
	}

	ngOnInit() {}
}
