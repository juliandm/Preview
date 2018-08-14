# Motivation for the Project edurata

## Problems, from worst to okay (regarding wikipedia)



* Natural language is limited: "raw", unordered & static: 
    * Processing barely possible
        * i.e. no conversion between graphs and text, no autogeneration of lists or cross relations.
    * author has a choice of few words to describe highly varying technical nuances
        * context unclear
            * content: some technical terms can't solely express what they are, what they include and how they are different from other terms. Reader is required to have context to deduce the main contents.
            * purpose: Reader may understand what the term describes but not what it solves. Reader can't weigh the importance of a topic against others or understand why it exists.
        * slightly varying definitions in different topics & languages, no centraliced "source of truth"
    * Redundance
        * The same content has to be repeated for every language
        * connections between articles have to be manually declared in every connected article
    * if there are visualizations, they are external pictures and not connected to the text 
* Details but no context
    * Negligence of "networking" the information and to put it in context. 
* No line between theory and practice 
    * Definitions (theory) sometimes poor and has to be supported by examples (practice) to express what it is. Ideally this should be separated.
    * Slightly varying definitions due to 
* No indivuality
    * Different readers have different approaches, but the 

## Problems (regarding wikipedia)

## Principles

* fast to grasp
    * on point visual definitions
    * reason for existance of every topic is made clear initially
    * Class - Topic approach simplifies jumping between theoretical knowledge (Definition) and empirical knowledge(Examples)  

* DRY and on point
    * In each topic exists only one definition for every language
    * Most basic vocabulary, no fancy technical terms
* (de-)structured
    * Every Entitity down to a single word is nested/connected in a massive ontology in the background
* versatile
    * Every Entity can be compared, visualized or processed in any desired way
    * No restriction to one-dimensional and redundant syntax of a natural language
* automized
    * visualization, hierarchy trees and text definitions get generated automatically
    * Inheritance of Classes
* fun
    * focusing on single elements of a definition and drawing them is most likely a better experience than cramming everything in one sentence
* open source
    * from scientists for scientists, in exchange for a small favour for us to keep the servers running,
    the database is yours
    * there are many ways to contribute, beeing the most obvious: extending the database. Please refer to our guidelines if you want to become a writer

Want to become an author? Start here
Still not convinced that this should be thing? Write us

## Motivation

### History of Information Exchange

* Regarding only one to one relationships
* Precision of Information increases in each step
1. Gestures/Facial Expression 
2. Speech 
3. Writing & Reading & Listening => Uncoupling of information from source => one carrier, still bound to location and time
  1. Saving possible
4. Internet => Uncoupling carrier from location and time
  1. Oral and visual senses can be transmitted, still lacking with feeling and smelling 
  4. Rapid Exchange = Almost uncoupling information from carrier, Source === Sink
  5. Filtering  = Only relevant information is transmitted
5. Processing => Uncoupling information from structure
  1. (Analysing, Interpreting, Predicting, Translating) Sent Information is has no distinct form and  is adapting to its location
  2. No overhead: Information exists in it's rawest and most relevant form


### Comparison of Natural Language with Maths
https://link.springer.com/chapter/10.1007/978-3-658-19567-0_8

Type | Natural Language| Maths
--- | --- | ---
Smallest entities | no combination, may be a combination ("busdriver") | no combination
Variables/Placeholders | A combination of entities ("the above mentioned patterns..") | one predefined entity ("x = 45") 
Semantic connection between entities | combination (Verbs/Conjunctions) | combination (Operators)
Grouping | combination (Sentences, Paragraphs) | combination (Formula)
Optimized Transfer Channel | Speech | Text
Transfer Size (s) | comforteably sliced chunks (~small) with Repetitions, Variance |  most efficient Size (whole Groups/Formulas) and no redundancy (~large) 
Transfer Time (t) | slow Pace with Breaks | most efficient Speed (~infinity) without breaks/condensed
Transfer Speed (v) | "Slow" | "fast"
Information intake for human learners | High (Can be grasped in most cases initially) | Low (Has to be repeated manually to understand)
Information intake for AI learners | Low (Has to filter out redundancies, evaluate meaning and weight Importance of entities itself) | High (necessary information is accessible and genuine with minimal preprocessing)
Reusability, reprocessing (visualizing) and integration | Low | High


### Conclusion

In order to understand information for the average human learner* the most favourable shape is in form of natural text. However to save and reuse information, to visualize it, to evaluate all possible connections, or for an intelligent machine to learn efficiently, this information needs to be destructured to smallest bits.

What this project tries to achieve is to create a database which contains information along three maximized principles:
* destructured
* integrated
* DRY


Goal: Transmission/Saving Information in small chunks and at slow Speed and with repetitions/redundancy (Reading/Talking)  <---> Transmission/Saving of Information in big chunks at high speed with no redundancy