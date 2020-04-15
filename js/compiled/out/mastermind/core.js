// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('mastermind.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
mastermind.core.colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","blue","darkviolet","deeppink","darkorange","white","yellow"], null);
mastermind.core.code_state = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.shuffle(mastermind.core.colors));
mastermind.core.selected_color = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
mastermind.core.game = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$board,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((12),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),"")))),cljs.core.cst$kw$current_DASH_row,(11)], null));
mastermind.core.won_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
mastermind.core.cal_feedback = (function mastermind$core$cal_feedback(row,code){
var feedback = cljs.core.PersistentVector.EMPTY;
var feedback__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(feedback,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,row,code))),"red"));
var feedback__$2 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(feedback__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(code),row)) - cljs.core.count(feedback__$1)),"white"));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(feedback__$2,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((5) - cljs.core.count(feedback__$2)),"grey"));
});
mastermind.core.feedback = (function mastermind$core$feedback(){
var colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),"grey"));
return ((function (colors){
return (function (index,k){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["feedback-row"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$on_DASH_click,((function (colors){
return (function (){
cljs.core.reset_BANG_(mastermind.core.game,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(mastermind.core.game),cljs.core.cst$kw$current_DASH_row,cljs.core.dec));

cljs.core.reset_BANG_(colors,mastermind.core.cal_feedback(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)),index),mastermind.core.code_state));

return cljs.core.reset_BANG_(mastermind.core.won_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["red",null], null), null),mastermind.core.cal_feedback(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)),index),mastermind.core.code_state)))));
});})(colors))
], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (colors){
return (function (p1__27120_SHARP_,p2__27119_SHARP_){
var G__27121 = p2__27119_SHARP_;
var G__27122 = "feedback-hole";
var G__27123 = ["fh",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27120_SHARP_)].join('');
var G__27124 = "";
return (mastermind.core.hole.cljs$core$IFn$_invoke$arity$4 ? mastermind.core.hole.cljs$core$IFn$_invoke$arity$4(G__27121,G__27122,G__27123,G__27124) : mastermind.core.hole.call(null,G__27121,G__27122,G__27123,G__27124));
});})(colors))
,cljs.core.deref(colors))], null);
});
;})(colors))
});
mastermind.core.hole = (function mastermind$core$hole(var_args){
var G__27126 = arguments.length;
switch (G__27126) {
case 4:
return mastermind.core.hole.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mastermind.core.hole.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mastermind.core.hole.cljs$core$IFn$_invoke$arity$4 = (function (color,class$,key,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),content], null);
});

mastermind.core.hole.cljs$core$IFn$_invoke$arity$5 = (function (r,c,color,class$,d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,"done")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(mastermind.core.selected_color,color);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.hole,color,"hole",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),""], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(mastermind.core.game,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(mastermind.core.game),cljs.core.cst$kw$board,(function (board){
return cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),cljs.core.deref(mastermind.core.selected_color));
})));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.hole,color,"hole",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),""], null)], null);
}
});

mastermind.core.hole.cljs$lang$maxFixedArity = 5;

mastermind.core.row = (function mastermind$core$row(var_args){
var G__27133 = arguments.length;
switch (G__27133) {
case 2:
return mastermind.core.row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mastermind.core.row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mastermind.core.row.cljs$core$IFn$_invoke$arity$2 = (function (r,key){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pegs-row"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__27128_SHARP_,p2__27129_SHARP_){
return mastermind.core.hole.cljs$core$IFn$_invoke$arity$4("grey","hole",["code",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27128_SHARP_)].join(''),p2__27129_SHARP_);
}),r)], null);
});

mastermind.core.row.cljs$core$IFn$_invoke$arity$3 = (function (r,index,key){
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current_DASH_row.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)),index))?"":(((cljs.core.cst$kw$current_DASH_row.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)) < index))?"done":"disabled"
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row",class$], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pegs-row"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (class$){
return (function (p1__27130_SHARP_,p2__27131_SHARP_){
return mastermind.core.hole.cljs$core$IFn$_invoke$arity$5(index,p1__27130_SHARP_,p2__27131_SHARP_,class$,"");
});})(class$))
,r)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.feedback,index,["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)], null);
});

mastermind.core.row.cljs$lang$maxFixedArity = 3;

mastermind.core.pegs = (function mastermind$core$pegs(colors){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pegs"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (_,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["peg",color], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(mastermind.core.selected_color,color);
})], null)], null);
}),colors)], null);
});
mastermind.core.overlay = (function mastermind$core$overlay(){
if(cljs.core.truth_(cljs.core.deref(mastermind.core.won_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"won"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Congratulations! You Won."], null)], null);
} else {
return null;
}
});
mastermind.core.board = (function mastermind$core$board(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.row,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),"?"),"code"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__27136_SHARP_,p2__27135_SHARP_){
return mastermind.core.row.cljs$core$IFn$_invoke$arity$3(p2__27135_SHARP_,p1__27136_SHARP_,["row",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27136_SHARP_)].join(''));
}),cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.overlay], null)], null);
});
var G__27137_27139 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.pegs,mastermind.core.colors], null)], null);
var G__27138_27140 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__27137_27139,G__27138_27140) : reagent.core.render_component.call(null,G__27137_27139,G__27138_27140));
