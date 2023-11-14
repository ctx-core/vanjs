import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
export declare function val__be_state_triple__new<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):val__be_state_triple_T<val_T, ctx_T>
export declare function val__be_state_triple__new<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined, be__params?:be__params_T
):val__be_state_triple_T<val_T, ctx_T>
export declare function val__be_state_triple__new<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:ctx_T)=>val_T, be__params?:be__params_T
):val__be_state_triple_T<val_T, ctx_T>
export declare function val__be_state_triple__new<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined, val__new?:(ctx:ctx_T)=>val_T, be__params?:be__params_T
):val__be_state_triple_T<val_T, ctx_T>
export type val__be_state_triple_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = [
	Be<State<val_T>>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void
]
export type val__be_state_triple__new__arg_a_T<
	val_T,
	ctx_T extends Ctx = Ctx
> =
	|[be__params?:be__params_T]
	|[id:string|null|undefined, be__params?:be__params_T]
	|[val__new:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
	|[id:string|null|undefined, val__new?:(ctx:ctx_T)=>val_T, be__params?:be__params_T]