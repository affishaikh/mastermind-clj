(ns mastermind.core
  (:require [reagent.core :as r :refer [atom]]))

(def colors ["red" "green" "blue" "darkviolet" "deeppink" "darkorange" "white" "yellow"])

(def code-state (take 5 (shuffle colors)))

(def selected-color (r/atom ""))

(def board-state (r/atom (vec (repeat 12 (vec (repeat 5 ""))))))

(defn cal-feedback
  [row code]
  (as-> [] feedback
        (concat feedback (repeat (count (filter true? (map = row code))) "red"))
        (concat feedback (repeat (- (count (filter (set code) row)) (count feedback)) "white"))
        (concat feedback (repeat (- 5 (count feedback)) "grey"))))

(defn feedback
  []
  (let [colors (r/atom (repeat 5 "grey"))]
    (fn [index k]
      [:div
        ^{:key k}
        {:class    ["feedback-row"]}
        [:input {:type     "checkbox"
                 :on-click #(reset! colors (cal-feedback (nth @board-state index) code-state))}]
        (map-indexed #(hole %2 "feedback-hole" (str "fh" %1) "") @colors)])))

(defn hole
  ([color class key content]
   [:div
    ^{:key key}
    {:class [class color]}
    content])
  ([r c color]
   [:div
    {:on-click #(reset! board-state (assoc-in @board-state [r c] @selected-color))}
    [hole color "hole" (str r c) ""]]))

(defn row
  ([r key]
   [:div
    {:class ["pegs-row"]}
    ^{:key key}
    (map-indexed #(hole "grey" "hole" (str "code" %1) %2) r)])
  ([r index key]
   [:div
    {:class ["row"]}
    ^{:key key}
    [:div
     {:class ["pegs-row"]}
     (map-indexed #(hole index %1 %2) r)]
    [feedback index (str "f" index)]]))

(defn board
  []
  [:div
   [row (repeat 5 "?") "code"]
   (map-indexed #(row %2 %1 (str "row" %1)) @board-state)])

(defn palette
  [colors]
  [:div
   {:class ["palette"]}
   (map-indexed (fn [_ color] [:div
                   {:class ["palette-unit" color]
                    :on-click #(reset! selected-color color)}]) colors)])

(r/render-component [:div {:class ["container"]} [board] [palette colors]]
                    (. js/document (getElementById "app")))
