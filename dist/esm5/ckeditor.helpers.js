/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
import loadScript from 'load-script';
var promise;
export function getEditorNamespace(editorURL) {
    if (editorURL.length < 1) {
        return Promise.reject(new TypeError('CKEditor URL must be a non-empty string.'));
    }
    if ('CKEDITOR' in window) {
        return Promise.resolve(CKEDITOR);
    }
    else if (!promise) {
        promise = new Promise(function (scriptResolve, scriptReject) {
            loadScript(editorURL, function (err) {
                if (err) {
                    scriptReject(err);
                }
                else {
                    scriptResolve(CKEDITOR);
                }
                promise = undefined;
            });
        });
    }
    return promise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NrZWRpdG9yNC1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY2tlZGl0b3IuaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLFVBQVUsTUFBTSxhQUFhLENBQUM7QUFHckMsSUFBSSxPQUFPLENBQUM7QUFFWixNQUFNLFVBQVUsa0JBQWtCLENBQUUsU0FBaUI7SUFDcEQsSUFBSyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztRQUMzQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUUsSUFBSSxTQUFTLENBQUUsMENBQTBDLENBQUUsQ0FBRSxDQUFDO0tBQ3JGO0lBRUQsSUFBSyxVQUFVLElBQUksTUFBTSxFQUFHO1FBQzNCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUUsQ0FBQztLQUNuQztTQUFNLElBQUssQ0FBQyxPQUFPLEVBQUc7UUFDdEIsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFFLFVBQUUsYUFBYSxFQUFFLFlBQVk7WUFDbkQsVUFBVSxDQUFFLFNBQVMsRUFBRSxVQUFBLEdBQUc7Z0JBQ3pCLElBQUssR0FBRyxFQUFHO29CQUNWLFlBQVksQ0FBRSxHQUFHLENBQUUsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ04sYUFBYSxDQUFFLFFBQVEsQ0FBRSxDQUFDO2lCQUMxQjtnQkFFRCxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLENBQUMsQ0FBRSxDQUFDO1FBQ0wsQ0FBQyxDQUFFLENBQUM7S0FDSjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIwLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQuXG4gKi9cblxuaW1wb3J0IGxvYWRTY3JpcHQgZnJvbSAnbG9hZC1zY3JpcHQnO1xuXG5kZWNsYXJlIGxldCBDS0VESVRPUjogYW55O1xubGV0IHByb21pc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0b3JOYW1lc3BhY2UoIGVkaXRvclVSTDogc3RyaW5nICk6IFByb21pc2U8eyBbIGtleTogc3RyaW5nIF06IGFueTsgfT4ge1xuXHRpZiAoIGVkaXRvclVSTC5sZW5ndGggPCAxICkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggbmV3IFR5cGVFcnJvciggJ0NLRWRpdG9yIFVSTCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nICkgKTtcblx0fVxuXG5cdGlmICggJ0NLRURJVE9SJyBpbiB3aW5kb3cgKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggQ0tFRElUT1IgKTtcblx0fSBlbHNlIGlmICggIXByb21pc2UgKSB7XG5cdFx0cHJvbWlzZSA9IG5ldyBQcm9taXNlKCAoIHNjcmlwdFJlc29sdmUsIHNjcmlwdFJlamVjdCApID0+IHtcblx0XHRcdGxvYWRTY3JpcHQoIGVkaXRvclVSTCwgZXJyID0+IHtcblx0XHRcdFx0aWYgKCBlcnIgKSB7XG5cdFx0XHRcdFx0c2NyaXB0UmVqZWN0KCBlcnIgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzY3JpcHRSZXNvbHZlKCBDS0VESVRPUiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHJvbWlzZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gcHJvbWlzZTtcbn1cbiJdfQ==