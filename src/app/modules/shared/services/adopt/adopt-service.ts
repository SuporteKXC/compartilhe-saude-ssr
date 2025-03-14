import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { ScriptLoaderService } from "../script-loader/script-loader.service";
import { Scripts } from "../script-loader/data/scripts";
import { Meta } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
    providedIn: 'root',
})
export class AdoptService {

    constructor(
        scriptLoaderService: ScriptLoaderService, 
        meta: Meta,
        @Inject(PLATFORM_ID) private plataformId: string) {
        meta.updateTag({ name: 'adopt-website-id', content: environment.adoptKey });

        if (isPlatformBrowser(this.plataformId)) {
            scriptLoaderService.load(
                Scripts.ADOPT_COOKIE,
                {
                    async: false,
                    defer: true,
                },
                "adopt-injector"
            ).subscribe();
        }
    }
}
