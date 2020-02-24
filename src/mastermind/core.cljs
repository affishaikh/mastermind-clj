(ns mastermind.core
  (:require [reagent.core :as r :refer [atom]]))

(def colors ["red" "green" "blue" "violet" "pink" "orange" "white" "yellow"])

(def code-state (take 5 (shuffle colors)))

(def selected-color (r/atom ""))

(def board-state (r/atom (vec (repeat 12 (vec (repeat 5 ""))))))

(defn cal-feedback
  [row code]
  (shuffle
    (reduce
     #(cond
        (= (nth row %2) (nth code %2)) (conj %1 "red")
        (boolean (some #{(nth row %2)} code)) (conj %1 "white")
        :else (conj %1 "grey"))
     [] (range 5))))

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
    {:style {:background color}
     :class [class]}
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
    ^{:key (str key index)}
    [:div
     {:class ["pegs-row"]}
     (map-indexed #(hole index %1 %2) r)]
    [feedback index (str "f" index)]]))

(defn board
  []
  [:div
   [row (repeat 5 "?") "code"]
   (map-indexed #(row %2 %1 "row") @board-state)])

(defn palette
  [colors]
  [:div
   {:class ["palette"]}
   (map-indexed (fn [_ color] [:div
                   {:class ["palette-unit"]
                    :style {:background-color color}
                    :on-click #(reset! selected-color color)}]) colors)])

(r/render-component [:div {:class ["container"]} [board] [palette colors]]
                    (. js/document (getElementById "app")))
