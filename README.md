# Motivation for the Project edurata

## Problems, from worst to okay (regarding wikipedia)

* Natural language is limited ("raw", loosely structured, redundant) 
    * Processing barely possible
        * i.e. no conversion between graphs and text, no autogeneration of lists or cross relations.
    * author has a choice of few words to describe highly varying technical nuances
        * context unclear
            * content: some technical definitions can't precisely express what they include/exclude due to the liberal nature of words. Reader is required to have examples for his usecase to draw the line.
            * purpose: Reader may understand what the term describes but not what it solves or why it exists. Without context, reader can't weigh the importance of a topic against others.
        * slightly varying definitions in different topics & languages, no centralised "source of truth"
    * Redundance
        * The same content has to be manually translated for every language
        * connections between articles have to be manually created/updated in every connected article. Mostly over links in a text.
* Details but no comparison
    * Negligence of "networking" the information and to compare it.
    * Not possible to see an auto generated graph of similarities/differences, pros/cons. <- has to be created and updated manually
* No line between theory and practice 
    * Definitions (theory) sometimes poor and have to be supported by examples (practice) to express what they mean. Ideally this should be separated.
* No individuality or flexibility
    * Different readers have different approaches. Ideally content is visualized in the readers desired way.

## Inspiration

* Ontologies
    * structuring entities with relations. not only in hierarchies.
* OO Programming languages
    * Inheritance of Classes: Sharing attributes among classes.
    * Functions: Constructing sentences through nested functions.
* Math
    * Single point of truth
    * No redundancies
    * destructured

## Comparison of Natural Language with Maths
https://link.springer.com/chapter/10.1007/978-3-658-19567-0_8

Type | Natural Language| Maths
--- | --- | ---
Main entities | words, may be a combination of words ("busdriver") | variables ("x") and operators ("+", "dx/dy")
Variables/Placeholders | A combination of entities ("the above mentioned value..") or personal pronouns ("she", "they") | one predefined entity ("x = 45") 
Semantic connection between entities | combination (Verbs/Conjunctions) | combination (Operators)
Grouping | combination (Sentences, Paragraphs) | combination (Formula)
Optimized Transfer Channel | Speech | Text
Transfer Size (s) | comforteably sliced chunks (~small) with Repetitions, Variance |  most efficient Size (whole Groups/Formulas) and no redundancy (~large) 
Transfer Speed (v) | "Slow" | "fast"
Information intake for human learners | High (Can be grasped in most cases initially) | Low (Has to be repeated manually to understand)
Information intake for AI learners | Low (Has to filter out redundancies, evaluate meaning and weight Importance of entities itself) | High (necessary information is accessible and genuine with minimal preprocessing)
Reusability, reprocessing (visualizing) and integration | Low | High


## Principles

In order to understand information for the average human learner the most favourable shape is in form of natural text. However to save and reuse information, to visualize it, to evaluate all possible connections, or for an intelligent machine to learn efficiently, this information needs to be destructured to smallest bits.
Therefore, this project tries to achieve creating a database along the following principles:

* fast to grasp
    * on point visual definitions
    * reason for existance of every topic is made clear initially
    * differences/similarities to other topics are visible initially
    * Inheritance approach simplifies jumping between theoretical knowledge (Definition) and empirical knowledge(Examples)  
* DRY and on point
    * In each topic exists only one definition for all languages
    * Most basic vocabulary, no fancy technical terms
    * No restriction to one-dimensional and redundant syntax of a natural language
    * Similar Features can be inherited
* integrated microstructure
    * Every Entitity down to a single word or variable in a formula is nested in a massive ontology in the background
    * optimized to train AI
* dynamic
    * Every Entity can be compared, visualized or processed in any desired way
* automized
    * visualization, hierarchy trees, text definitions, pro/con lists, feature list, etc.. get generated automatically
* (open source)
