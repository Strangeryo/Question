/// <reference types="vite/client" />

//  env.d.ts 
// 这个文件生效的前提是 tsconfig.json 中配置了 "include": ["env.d.ts"],

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}