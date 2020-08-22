export const components = {
WidgetComponent: () => import('/home/grandschtroumpf/code/tests/angular/ng-studio-test/src/app/sandbox/widget/widget.component').then(m => m.WidgetComponent),
SandboxComponent: () => import('/home/grandschtroumpf/code/tests/angular/ng-studio-test/src/app/sandbox/sandbox/sandbox.component').then(m => m.SandboxComponent),
LazyComponent: () => import('/home/grandschtroumpf/code/tests/angular/ng-studio-test/src/app/lazy/lazy.component').then(m => m.LazyComponent),
TesterComponent: () => import('/home/grandschtroumpf/code/tests/angular/ng-studio-test/src/app/tester/tester.component').then(m => m.TesterComponent),
AppComponent: () => import('/home/grandschtroumpf/code/tests/angular/ng-studio-test/src/app/app.component').then(m => m.AppComponent),
CtxMenuComponent: () => import('/home/grandschtroumpf/code/tests/angular/ng-studio-test/src/app/sandbox/ctx-menu/ctx-menu.component').then(m => m.CtxMenuComponent),
};
