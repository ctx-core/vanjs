/// <reference lib="dom" />
import type { ChildDom, CoreVan, MiniVan, PlateVan, Props, TagFunc, VanShape } from 'van-type-delegate'
export declare function props_clean_van__new<V extends VanShape>(van:V):Van_w_undefined<V>
export type Props_w_undefined = Record<string, Props[string]|undefined>
export type TagFunc_w_undefined<van_T extends VanShape> = (
	first?:Props|ChildDom<van_T>|Props_w_undefined,
	...rest:readonly ChildDom<van_T>[]
)=>ReturnType<TagFunc<van_T>>
export type Tags_w_undefined<van_T extends VanShape> = Record<string, TagFunc_w_undefined<van_T>>
export type TagNS_w_undefined<van_T extends VanShape> =
	(namespaceURI:string)=>Readonly<Record<string, TagFunc_w_undefined<van_T>>>
export type Van_w_undefined<van_T extends VanShape> = van_T&{
	tags:Tags_w_undefined<van_T>
	tagsNS:TagNS_w_undefined<van_T>
}
export type VanShape_w_undefined =
	|VanShape
	|Van_w_undefined<MiniVan>
	|Van_w_undefined<PlateVan>
	|Van_w_undefined<CoreVan>