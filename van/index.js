/// <reference types="ctx-core" />
/// <reference types="van-type-delegate" />
/// <reference types="./index.d.ts" />
import { be_, ctx__delete, ctx__set } from 'ctx-core/be'
import van from 'mini-van-plate/van-plate'
/** @type {Be<[VanShape|null]>} */
export let van_ = be_(()=>null, { id: 'van_' })
/**
 * @param {ctx_T}ctx
 * @param {VanShape}van
 */
export function van__set(ctx, van) {
	ctx__set(ctx, van_, van)
	ctx__delete(ctx, van_internals_)
}
/**
 * @param {ctx_T}ctx
 * @returns {van_internals_T}
 * @private
 */
export let van_internals_ = be_(()=>{
	let protoOf = Object.getPrototypeOf, funcProto = protoOf(protoOf), objProto = protoOf({})
	let stateProto = protoOf(van.state())
	return {
		protoOf,
		funcProto,
		objProto,
		elementProto: protoOf(van.tags.div()),
		stateProto,
		/**
		 * Only used for van-plate & mini-van
		 * @param {Exclude<ChildDom, null|undefined>}v
		 * @param {string}[k]
		 */
		plainValue(v, k) {
			let protoOfV = protoOf(v ?? 0)
			return protoOfV === stateProto
				? (/** @type {State} */v).val
				: protoOfV === funcProto && (!k?.startsWith('on') || v._isBindingFunc)
					? v(undefined)
					: v
		}
	}
}, { id: 'van_internals_' })
