import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeEngineService {

  private renderer: Renderer2;

constructor(rendererFactory: RendererFactory2) { 
  this.renderer = rendererFactory.createRenderer(null, null);
}
  setBackground(colorClass): void {
    this.renderer.addClass(document.body, colorClass);
  }
}
