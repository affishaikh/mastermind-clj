(ns mastermind.core
  (:require [reagent.core :as r :refer [atom]]))

(def colors ["red" "green" "blue" "darkviolet" "deeppink" "darkorange" "white" "yellow"])

(def code-state (take 5 (shuffle colors)))

(def selected-color (r/atom ""))

(def game (r/atom {:board (vec (repeat 12 (vec (repeat 5 ""))))
                   :current-row 11}))

(def won? (r/atom false))

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
       {:class ["feedback-row"]}
       [:input {:type     "checkbox"
                :on-click #(do (reset! game (update @game :current-row dec))
                               (reset! colors (cal-feedback (nth (:board @game) index) code-state))
                               (reset! won? (= 5 (count
                                                   (filter
                                                     #{"red"}
                                                     (cal-feedback (nth (:board @game) index) code-state))))))}]
       (map-indexed #(hole %2 "feedback-hole" (str "fh" %1) "") @colors)])))

(defn hole
  ([color class key content]
   [:div
    ^{:key key}
    {:class [class color]}
    content])
  ([r c color]
   [:div
    {:on-click #(reset! game (update @game :board (fn [board] (assoc-in board [r c] @selected-color))))}
    [hole color "hole" (str r c) ""]]))

(defn row
  ([r key]
   [:div
    {:class ["pegs-row"]}
    ^{:key key}
    (map-indexed #(hole "grey" "hole" (str "code" %1) %2) r)])
  ([r index key]
   (let
     [class (if (= (:current-row @game) index) "" "disabled")]
     [:div
      {:class ["row" class]}
      ^{:key key}
      [:div
       {:class ["pegs-row"]}
       (map-indexed #(hole index %1 %2) r)]
      [feedback index (str "f" index)]])))

(defn pegs
  [colors]
  [:div
   {:class ["pegs"]}
   (map-indexed (fn
                  [_ color]
                  [:div
                   {:class    ["peg" color]
                    :on-click #(reset! selected-color color)}])
                colors)])

(defn overlay
  []
  (when @won?
    [:div {:class "won"}
     [:div "Congratulations! You Won."]]))

(defn board
  []
  [:div
   [row (repeat 5 "?") "code"]
   (map-indexed #(row %2 %1 (str "row" %1)) (:board @game))
   [overlay]])

(r/render-component [:div {:class ["container"]} [board] [pegs colors]]
                    (. js/document (getElementById "app")))
