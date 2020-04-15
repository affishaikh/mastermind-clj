// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26241__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26242__i = 0, G__26242__a = new Array(arguments.length -  0);
while (G__26242__i < G__26242__a.length) {G__26242__a[G__26242__i] = arguments[G__26242__i + 0]; ++G__26242__i;}
  args = new cljs.core.IndexedSeq(G__26242__a,0,null);
} 
return G__26241__delegate.call(this,args);};
G__26241.cljs$lang$maxFixedArity = 0;
G__26241.cljs$lang$applyTo = (function (arglist__26243){
var args = cljs.core.seq(arglist__26243);
return G__26241__delegate(args);
});
G__26241.cljs$core$IFn$_invoke$arity$variadic = G__26241__delegate;
return G__26241;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26244__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26245__i = 0, G__26245__a = new Array(arguments.length -  0);
while (G__26245__i < G__26245__a.length) {G__26245__a[G__26245__i] = arguments[G__26245__i + 0]; ++G__26245__i;}
  args = new cljs.core.IndexedSeq(G__26245__a,0,null);
} 
return G__26244__delegate.call(this,args);};
G__26244.cljs$lang$maxFixedArity = 0;
G__26244.cljs$lang$applyTo = (function (arglist__26246){
var args = cljs.core.seq(arglist__26246);
return G__26244__delegate(args);
});
G__26244.cljs$core$IFn$_invoke$arity$variadic = G__26244__delegate;
return G__26244;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
