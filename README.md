# Class
* Contains all skeletons of functions & attributes which are shared by several topics. 

* When a class is assigned to a new Topic, this Topic automatically inherits all skeletons of functions & attributes of the class.

* Has to inherit from another Class

# AttributePair (key, value)
value one of nominal, rational, boolean
# Function (source, sink, relationship)
Connects two topics

# Topic
The main entity to store information around a topic. 

## Structure

* Theory
  * Sum Up
    * Definiton (Text generated from attributes, functions, parent Topics, Partitions)
    * Categories
      * History
      * Criticism
    * Is & Why Attributes/Functions
    * 
  * Parent Classes (from which classes does it inherit)
  * Key Words (Words which are in the Definition and are not a Function or Parent Class)
  * Attributes (what attributes define the topics)
    * Normal Attribute
    * Copied Attribute from Class  
    * Copied Attribute from Element
    * Special Attribute (optional)
      * Why Attribute
  * Functions (What is the connection with other Topics?) 
    * Normal Function (If this is Leaf Child)
    * Copied Function from Class      
    * Copied Function from Element (functions from children get also displayed here)
    * Special Function (optional)
      * Why Function
      * Pendant (x to y like a to b)
      * Opposite (to x in )
  * Partitions: (Array of unique Attributes who partition the Topic in different ways and has Topics as Values, default Name is elements)
    * Attribute (Elements || other categorization)
      * AttributeValue (Topic)
      * ...
    * ...
* Practice
  * Examples 
    * Example == Object of Instance
* Other Attributes

## Example

* Database
  * Theory
    * Functions
      * Element
        * Function (AttrPair as Function Value)
      * ...
    * Categories (unique Attributes who partition the Topic in different ways)
      * Attribute 
        * AttributeValue
        * ...
      * ...
    * Elements
      * DMS
      * DB engerer Sinn
  * Practice
    * Examples
      * 
  * Other Attributes

# Function

## Structure

* Input Variables
* Output Variables
* inverse

## Types

### General
* Is ()
* Save ()
* Provide ()
* Solve (finds a solution for a problem)
* decide (decide between alternatives)
### Numeric
* increase
* decrease 

### Math (LateX and other languages as inspiration)
* add
* subtract
* divide
* multiply 

### Boolean

# Reasons for the Website

Saving Information in a 

## Problems

* Redundant Information 
* Accessibility & Presence of any information is no problem, whereas the context is


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
Semantic connection between entities | combination (Verbs/Conjunctions) | combination (Operators) |
Grouping | combination (Sentences, Paragraphs) | combination (Formula) |
Optimized Transfer Channel | Speech | Text |
Optimized Transfer Channel | Speech | Text |
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