/// <reference lib="dom" />
const protoOf = Object.getPrototypeOf
const objProto = protoOf({})
/** @typedef {import('van-type-delegate').ChildDom} */
/** @typedef {import('van-type-delegate').Props} */
/** @typedef {import('van-type-delegate').TagFunc} */
/** @typedef {import('van-type-delegate').Tags} */
/** @typedef {import('van-type-delegate').VanShape} */
/** @typedef {import('./index.d.ts').Tags_props_clean} */
/** @typedef {import('./index.d.ts').Van_props_clean} */
/**
 * @param {VanShape}van
 * @returns {VanShape_w_undefined}
 */
export function props_clean__van__new(van) {
	/** @type {Proxy<Tags<VanShape>>} */
	let props_clean__tags = props_clean__tags__new(van.tags)
	let { tagsNS } = van
	let props_clean__tagsNS = name=>props_clean__tags__new(tagsNS(name))
	/** @type {Van_w_undefined} */
	return new Proxy(van, {
		get(target, p, receiver) {
			return (
				p === 'props_clean'
					? props_clean
					: p === 'tags'
						? props_clean__tags
						: p === 'tagsNS'
							? props_clean__tagsNS
							: Reflect.get(target, p, receiver)
			)
		}
	})
}
/**
 * @param {Tags}tags
 * @returns {Tags_props_clean}
 */
export function props_clean__tags__new(tags) {
	return new Proxy(tags, {
		get(target, p, receiver) {
			/** @type {TagFunc} */
			const tag = Reflect.get(target, p, receiver)
			if (!tag) return tag
			/** @type {TagFunc} */
			return ((...args)=>{
				/** @type {[Props, ...ChildDom[]} */
				let [
					props,
					...children
				] = protoOf(args[0] ?? 0) === objProto ? args : [{}, ...args]
				const clean__props = props_clean(props)
				return tag(clean__props, ...children)
			})
		}
	})
}
/**
 * @param {Props}props
 * @returns {Props}
 */
export function props_clean(props) {
	for (const key of Object.keys(props)) {
		if (props[key] == null) delete props[key]
	}
	return props
}
