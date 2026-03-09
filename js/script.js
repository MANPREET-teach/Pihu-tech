// Comprehensive Tutorial Data from GeeksforGeeks
const tutorials = [
    // Python Tutorials
    {
        id: 1,
        title: "Python Basics",
        description: "Learn Python fundamentals including syntax, data types, variables, and basic operations.",
        icon: "fab fa-python",
        category: "python",
        progress: 0,
        content: `
            <h3>Introduction to Python</h3>
            <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data science, AI, and automation.</p>
            
            <h3>Python Syntax Basics</h3>
            <pre><code># Simple Python program
print("Hello, World!")

# Variables and data types
name = "Alice"
age = 25
height = 5.6
is_student = True</code></pre>
            
            <h3>Python Data Types</h3>
            <ul>
                <li><strong>Numbers:</strong> int, float, complex</li>
                <li><strong>Strings:</strong> Sequence of characters</li>
                <li><strong>Lists:</strong> Ordered, mutable collections</li>
                <li><strong>Tuples:</strong> Ordered, immutable collections</li>
                <li><strong>Dictionaries:</strong> Key-value pairs</li>
                <li><strong>Sets:</strong> Unordered collections of unique elements</li>
            </ul>
            
            <h3>Control Structures</h3>
            <pre><code># If-else statement
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which data type in Python is immutable and ordered?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">List</div>
                    <div class="quiz-option" data-correct="false">Dictionary</div>
                    <div class="quiz-option" data-correct="true">Tuple</div>
                    <div class="quiz-option" data-correct="false">Set</div>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "Python Functions & OOP",
        description: "Master functions, classes, objects, and object-oriented programming concepts in Python.",
        icon: "fab fa-python",
        category: "python",
        progress: 0,
        content: `
            <h3>Python Functions</h3>
            <p>Functions are reusable blocks of code that perform a specific task. They help in organizing code and avoiding repetition.</p>
            
            <pre><code># Function definition
def greet(name):
    return f"Hello, {name}!"

# Function call
message = greet("Alice")
print(message)

# Function with default parameters
def power(base, exponent=2):
    return base ** exponent</code></pre>
            
            <h3>Object-Oriented Programming in Python</h3>
            <p>OOP is a programming paradigm that uses objects and classes. The main concepts are:</p>
            <ul>
                <li><strong>Class:</strong> Blueprint for creating objects</li>
                <li><strong>Object:</strong> Instance of a class</li>
                <li><strong>Encapsulation:</strong> Bundling data and methods</li>
                <li><strong>Inheritance:</strong> Creating new classes from existing ones</li>
                <li><strong>Polymorphism:</strong> Using a common interface for different data types</li>
            </ul>
            
            <h3>Class and Object Example</h3>
            <pre><code>class Car:
    # Class attribute
    wheels = 4
    
    # Constructor
    def __init__(self, brand, model, year):
        # Instance attributes
        self.brand = brand
        self.model = model
        self.year = year
    
    # Method
    def display_info(self):
        return f"{self.year} {self.brand} {self.model}"

# Creating objects
car1 = Car("Toyota", "Camry", 2022)
car2 = Car("Honda", "Civic", 2021)

print(car1.display_info())
print(f"All cars have {Car.wheels} wheels")</code></pre>
            
            <h3>Inheritance Example</h3>
            <pre><code>class ElectricCar(Car):
    def __init__(self, brand, model, year, battery_size):
        super().__init__(brand, model, year)
        self.battery_size = battery_size
    
    def display_info(self):
        return f"{super().display_info()} with {self.battery_size}kWh battery"

# Using the subclass
tesla = ElectricCar("Tesla", "Model S", 2023, 100)
print(tesla.display_info())</code></pre>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which OOP concept allows a class to inherit attributes and methods from another class?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Encapsulation</div>
                    <div class="quiz-option" data-correct="false">Polymorphism</div>
                    <div class="quiz-option" data-correct="true">Inheritance</div>
                    <div class="quiz-option" data-correct="false">Abstraction</div>
                </div>
            </div>
        `
    },
    // Data Structures Tutorials
    {
        id: 3,
        title: "Arrays & Linked Lists",
        description: "Learn about arrays, linked lists, their operations, and time complexities.",
        icon: "fas fa-project-diagram",
        category: "dsa",
        progress: 0,
        content: `
            <h3>Arrays</h3>
            <p>An array is a collection of items stored at contiguous memory locations. The items can be of the same type.</p>
            
            <h4>Array Characteristics</h4>
            <ul>
                <li>Fixed size (in most languages)</li>
                <li>Elements are stored in contiguous memory</li>
                <li>Random access using index</li>
                <li>Time complexity: Access O(1), Search O(n), Insertion O(n), Deletion O(n)</li>
            </ul>
            
            <h3>Linked Lists</h3>
            <p>A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node.</p>
            
            <h4>Types of Linked Lists</h4>
            <ul>
                <li><strong>Singly Linked List:</strong> Each node points to the next node</li>
                <li><strong>Doubly Linked List:</strong> Each node points to both next and previous nodes</li>
                <li><strong>Circular Linked List:</strong> Last node points back to the first node</li>
            </ul>
            
            <h3>Array vs Linked List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Array</th>
                        <th>Linked List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Memory Allocation</td>
                        <td>Contiguous</td>
                        <td>Non-contiguous</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>Fixed</td>
                        <td>Dynamic</td>
                    </tr>
                    <tr>
                        <td>Access Time</td>
                        <td>O(1)</td>
                        <td>O(n)</td>
                    </tr>
                    <tr>
                        <td>Insertion/Deletion</td>
                        <td>O(n)</td>
                        <td>O(1) if position known</td>
                    </tr>
                    <tr>
                        <td>Memory Usage</td>
                        <td>Less (no pointers)</td>
                        <td>More (extra pointers)</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Linked List Implementation in Python</h3>
            <pre><code>class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
    
    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        return elements

# Usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
print(ll.display())  # Output: [1, 2, 3]</code></pre>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which data structure provides O(1) time complexity for accessing elements by index?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="true">Array</div>
                    <div class="quiz-option" data-correct="false">Linked List</div>
                    <div class="quiz-option" data-correct="false">Both</div>
                    <div class="quiz-option" data-correct="false">Neither</div>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "Stacks & Queues",
        description: "Understand stack and queue data structures, their implementations, and applications.",
        icon: "fas fa-layer-group",
        category: "dsa",
        progress: 0,
        content: `
            <h3>Stacks</h3>
            <p>A stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. Elements are added and removed from the same end (top).</p>
            
            <h4>Stack Operations</h4>
            <ul>
                <li><strong>Push:</strong> Add an element to the top</li>
                <li><strong>Pop:</strong> Remove the top element</li>
                <li><strong>Peek/Top:</strong> View the top element without removing it</li>
                <li><strong>isEmpty:</strong> Check if stack is empty</li>
            </ul>
            
            <h4>Stack Applications</h4>
            <ul>
                <li>Function call management</li>
                <li>Expression evaluation</li>
                <li>Undo/Redo functionality</li>
                <li>Backtracking algorithms</li>
            </ul>
            
            <h3>Queues</h3>
            <p>A queue is a linear data structure that follows the FIFO (First-In-First-Out) principle. Elements are added at the rear and removed from the front.</p>
            
            <h4>Queue Operations</h4>
            <ul>
                <li><strong>Enqueue:</strong> Add an element to the rear</li>
                <li><strong>Dequeue:</strong> Remove an element from the front</li>
                <li><strong>Front:</strong> Get the front element</li>
                <li><strong>Rear:</strong> Get the rear element</li>
            </ul>
            
            <h4>Types of Queues</h4>
            <ul>
                <li><strong>Simple Queue:</strong> Basic FIFO structure</li>
                <li><strong>Circular Queue:</strong> Last element points to the first</li>
                <li><strong>Priority Queue:</strong> Elements with higher priority dequeued first</li>
                <li><strong>Double Ended Queue (Deque):</strong> Insertion and deletion from both ends</li>
            </ul>
            
            <h3>Stack Implementation in Python</h3>
            <pre><code>class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return "Stack is empty"
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return "Stack is empty"
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.pop())  # Output: 30
print(stack.peek()) # Output: 20</code></pre>
            
            <h3>Queue Implementation in Python</h3>
            <pre><code>class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        return "Queue is empty"
    
    def front(self):
        if not self.is_empty():
            return self.items[0]
        return "Queue is empty"
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(queue.dequeue())  # Output: 10
print(queue.front())    # Output: 20</code></pre>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which data structure follows the LIFO (Last-In-First-Out) principle?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="true">Stack</div>
                    <div class="quiz-option" data-correct="false">Queue</div>
                    <div class="quiz-option" data-correct="false">Array</div>
                    <div class="quiz-option" data-correct="false">Linked List</div>
                </div>
            </div>
        `
    },
    // PC Assembly Tutorials
    {
        id: 5,
        title: "PC Components & Architecture",
        description: "Learn about computer hardware components, CPU architecture, and how they work together.",
        icon: "fas fa-microchip",
        category: "assembly",
        progress: 0,
        content: `
            <h3>Computer Architecture Basics</h3>
            <p>Computer architecture refers to the design of computer systems, including the instruction set architecture, microarchitecture, and system design.</p>
            
            <h3>Major PC Components</h3>
            <ul>
                <li><strong>Motherboard:</strong> Main circuit board connecting all components</li>
                <li><strong>CPU (Central Processing Unit):</strong> Executes instructions and processes data</li>
                <li><strong>RAM (Random Access Memory):</strong> Temporary storage for running programs</li>
                <li><strong>Storage:</strong> HDD, SSD for permanent data storage</li>
                <li><strong>GPU (Graphics Processing Unit):</strong> Handles graphics rendering</li>
                <li><strong>PSU (Power Supply Unit):</strong> Provides power to all components</li>
            </ul>
            
            <h3>CPU Architecture</h3>
            <p>The CPU is the brain of the computer and consists of several key components:</p>
            <ul>
                <li><strong>Control Unit:</strong> Directs operation of the processor</li>
                <li><strong>ALU (Arithmetic Logic Unit):</strong> Performs arithmetic and logical operations</li>
                <li><strong>Registers:</strong> Small, fast storage locations within the CPU</li>
                <li><strong>Cache:</strong> Small, fast memory storing frequently used data</li>
            </ul>
            
            <h3>Instruction Execution Cycle</h3>
            <p>The CPU follows a specific cycle to execute instructions:</p>
            <ol>
                <li><strong>Fetch:</strong> Retrieve instruction from memory</li>
                <li><strong>Decode:</strong> Determine what the instruction means</li>
                <li><strong>Execute:</strong> Perform the instruction operation</li>
                <li><strong>Store:</strong> Write results back to memory or registers</li>
            </ol>
            
            <h3>Memory Hierarchy</h3>
            <table>
                <thead>
                    <tr>
                        <th>Memory Type</th>
                        <th>Speed</th>
                        <th>Size</th>
                        <th>Cost</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Registers</td>
                        <td>Fastest</td>
                        <td>Smallest</td>
                        <td>Highest</td>
                        <td>CPU</td>
                    </tr>
                    <tr>
                        <td>Cache</td>
                        <td>Very Fast</td>
                        <td>Small</td>
                        <td>High</td>
                        <td>CPU/Close to CPU</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>Fast</td>
                        <td>Medium</td>
                        <td>Medium</td>
                        <td>Motherboard</td>
                    </tr>
                    <tr>
                        <td>SSD/HDD</td>
                        <td>Slow</td>
                        <td>Large</td>
                        <td>Low</td>
                        <td>Storage bays</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Basic Assembly Concepts</h3>
            <p>Assembly language is a low-level programming language that closely corresponds to machine code instructions.</p>
            <ul>
                <li><strong>Mnemonics:</strong> Short codes representing instructions (e.g., MOV, ADD, JMP)</li>
                <li><strong>Registers:</strong> Small storage locations in the CPU (e.g., AX, BX, CX)</li>
                <li><strong>Addressing Modes:</strong> Ways to specify operands (immediate, direct, indirect)</li>
            </ul>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which component is responsible for performing arithmetic and logical operations in a CPU?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Control Unit</div>
                    <div class="quiz-option" data-correct="true">ALU</div>
                    <div class="quiz-option" data-correct="false">Registers</div>
                    <div class="quiz-option" data-correct="false">Cache</div>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "Assembly Programming Basics",
        description: "Learn x86 assembly language fundamentals, instructions, and basic programming concepts.",
        icon: "fas fa-laptop-code",
        category: "assembly",
        progress: 0,
        content: `
            <h3>x86 Assembly Language</h3>
            <p>x86 assembly is a family of assembly languages for x86 processors. It provides direct control over hardware resources.</p>
            
            <h3>Basic x86 Registers</h3>
            <ul>
                <li><strong>General Purpose Registers:</strong> EAX, EBX, ECX, EDX (32-bit)</li>
                <li><strong>Index Registers:</strong> ESI, EDI</li>
                <li><strong>Pointer Registers:</strong> EBP, ESP</li>
                <li><strong>Instruction Pointer:</strong> EIP</li>
                <li><strong>Flags Register:</strong> EFLAGS</li>
            </ul>
            
            <h3>Common x86 Instructions</h3>
            <table>
                <thead>
                    <tr>
                        <th>Instruction</th>
                        <th>Syntax</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MOV</td>
                        <td>MOV dest, src</td>
                        <td>Move data from source to destination</td>
                    </tr>
                    <tr>
                        <td>ADD</td>
                        <td>ADD dest, src</td>
                        <td>Add source to destination</td>
                    </tr>
                    <tr>
                        <td>SUB</td>
                        <td>SUB dest, src</td>
                        <td>Subtract source from destination</td>
                    </tr>
                    <tr>
                        <td>MUL</td>
                        <td>MUL src</td>
                        <td>Unsigned multiplication</td>
                    </tr>
                    <tr>
                        <td>DIV</td>
                        <td>DIV src</td>
                        <td>Unsigned division</td>
                    </tr>
                    <tr>
                        <td>JMP</td>
                        <td>JMP label</td>
                        <td>Unconditional jump</td>
                    </tr>
                    <tr>
                        <td>CMP</td>
                        <td>CMP op1, op2</td>
                        <td>Compare two operands</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Simple Assembly Program</h3>
            <pre><code>section .data
    msg db 'Hello, World!', 0xa  ; string to print
    len equ $ - msg             ; length of string

section .text
    global _start

_start:
    ; write hello world to stdout
    mov edx, len    ; message length
    mov ecx, msg    ; message to write
    mov ebx, 1      ; file descriptor (stdout)
    mov eax, 4      ; system call number (sys_write)
    int 0x80        ; call kernel

    ; exit program
    mov eax, 1      ; system call number (sys_exit)
    int 0x80        ; call kernel</code></pre>
            
            <h3>Addressing Modes</h3>
            <ul>
                <li><strong>Immediate:</strong> MOV EAX, 5 (load constant 5 into EAX)</li>
                <li><strong>Register:</strong> MOV EAX, EBX (copy EBX to EAX)</li>
                <li><strong>Direct:</strong> MOV EAX, [value] (load from memory address)</li>
                <li><strong>Register Indirect:</strong> MOV EAX, [EBX] (load from address in EBX)</li>
            </ul>
            
            <h3>Control Flow in Assembly</h3>
            <p>Assembly uses conditional and unconditional jumps to control program flow:</p>
            <pre><code>; Compare two values and jump
mov eax, 10
mov ebx, 20
cmp eax, ebx
jl less_than      ; Jump if eax < ebx
jmp greater_equal ; Jump otherwise

less_than:
    ; Code for eax < ebx
    jmp end

greater_equal:
    ; Code for eax >= ebx

end:
    ; Continue execution</code></pre>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which x86 instruction is used to move data from one location to another?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">ADD</div>
                    <div class="quiz-option" data-correct="true">MOV</div>
                    <div class="quiz-option" data-correct="false">JMP</div>
                    <div class="quiz-option" data-correct="false">CMP</div>
                </div>
            </div>
        `
    },
    // Networking Tutorials
    {
        id: 7,
        title: "Network Fundamentals",
        description: "Learn basic networking concepts, protocols, and network architecture.",
        icon: "fas fa-network-wired",
        category: "networking",
        progress: 0,
        content: `
            <h3>Computer Networks Overview</h3>
            <p>A computer network is a system that connects multiple independent computers to share information and resources.</p>
            
            <h3>Network Types</h3>
            <ul>
                <li><strong>PAN (Personal Area Network):</strong> Small network for personal devices</li>
                <li><strong>LAN (Local Area Network):</strong> Network within a building or campus</li>
                <li><strong>MAN (Metropolitan Area Network):</strong> Network spanning a city</li>
                <li><strong>WAN (Wide Area Network):</strong> Network covering large geographical areas</li>
            </ul>
            
            <h3>Network Topologies</h3>
            <ul>
                <li><strong>Bus:</strong> All devices connected to a single cable</li>
                <li><strong>Star:</strong> All devices connected to a central hub</li>
                <li><strong>Ring:</strong> Devices connected in a circular fashion</li>
                <li><strong>Mesh:</strong> Each device connected to every other device</li>
                <li><strong>Hybrid:</strong> Combination of two or more topologies</li>
            </ul>
            
            <h3>OSI Model</h3>
            <p>The OSI (Open Systems Interconnection) model divides network communication into 7 layers:</p>
            <ol>
                <li><strong>Physical:</strong> Transmission of raw bits over physical medium</li>
                <li><strong>Data Link:</strong> Node-to-node data transfer, error detection</li>
                <li><strong>Network:</strong> Routing, logical addressing (IP)</li>
                <li><strong>Transport:</strong> End-to-end connection, reliability (TCP, UDP)</li>
                <li><strong>Session:</strong> Establishing, managing, terminating sessions</li>
                <li><strong>Presentation:</strong> Data translation, encryption, compression</li>
                <li><strong>Application:</strong> Network services to applications</li>
            </ol>
            
            <h3>TCP/IP Protocol Suite</h3>
            <p>The TCP/IP model is the foundation of the internet and has 4 layers:</p>
            <ul>
                <li><strong>Network Access:</strong> Physical and data link layers</li>
                <li><strong>Internet:</strong> Network layer (IP, ICMP)</li>
                <li><strong>Transport:</strong> Transport layer (TCP, UDP)</li>
                <li><strong>Application:</strong> Application layer (HTTP, FTP, SMTP, DNS)</li>
            </ul>
            
            <h3>Common Network Protocols</h3>
            <table>
                <thead>
                    <tr>
                        <th>Protocol</th>
                        <th>Layer</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTTP/HTTPS</td>
                        <td>Application</td>
                        <td>Web page transfer</td>
                    </tr>
                    <tr>
                        <td>FTP</td>
                        <td>Application</td>
                        <td>File transfer</td>
                    </tr>
                    <tr>
                        <td>SMTP</td>
                        <td>Application</td>
                        <td>Email transmission</td>
                    </tr>
                    <tr>
                        <td>DNS</td>
                        <td>Application</td>
                        <td>Domain name resolution</td>
                    </tr>
                    <tr>
                        <td>TCP</td>
                        <td>Transport</td>
                        <td>Reliable connection-oriented communication</td>
                    </tr>
                    <tr>
                        <td>UDP</td>
                        <td>Transport</td>
                        <td>Unreliable connectionless communication</td>
                    </tr>
                    <tr>
                        <td>IP</td>
                        <td>Internet</td>
                        <td>Packet routing and addressing</td>
                    </tr>
                    <tr>
                        <td>ICMP</td>
                        <td>Internet</td>
                        <td>Error reporting and diagnostics</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which layer of the OSI model is responsible for logical addressing and routing?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Physical Layer</div>
                    <div class="quiz-option" data-correct="false">Data Link Layer</div>
                    <div class="quiz-option" data-correct="true">Network Layer</div>
                    <div class="quiz-option" data-correct="false">Transport Layer</div>
                </div>
            </div>
        `
    },
    {
        id: 8,
        title: "IP Addressing & Subnetting",
        description: "Learn about IP addresses, subnet masks, CIDR notation, and subnetting techniques.",
        icon: "fas fa-map-marker-alt",
        category: "networking",
        progress: 0,
        content: `
            <h3>IP Addressing</h3>
            <p>An IP address is a unique identifier assigned to each device connected to a network that uses the Internet Protocol for communication.</p>
            
            <h3>IPv4 Address Structure</h3>
            <p>IPv4 addresses are 32-bit numbers typically represented in dotted-decimal notation (e.g., 192.168.1.1).</p>
            <ul>
                <li><strong>Network Part:</strong> Identifies the network</li>
                <li><strong>Host Part:</strong> Identifies the specific device</li>
                <li><strong>Subnet Mask:</strong> Determines which part is network and which is host</li>
            </ul>
            
            <h3>IP Address Classes</h3>
            <table>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Range</th>
                        <th>Default Subnet Mask</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>1.0.0.0 to 126.255.255.255</td>
                        <td>255.0.0.0</td>
                        <td>Large networks</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>128.0.0.0 to 191.255.255.255</td>
                        <td>255.255.0.0</td>
                        <td>Medium networks</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>192.0.0.0 to 223.255.255.255</td>
                        <td>255.255.255.0</td>
                        <td>Small networks</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>224.0.0.0 to 239.255.255.255</td>
                        <td>N/A</td>
                        <td>Multicasting</td>
                    </tr>
                    <tr>
                        <td>E</td>
                        <td>240.0.0.0 to 255.255.255.255</td>
                        <td>N/A</td>
                        <td>Experimental</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Subnetting</h3>
            <p>Subnetting is the process of dividing a network into smaller network segments to improve performance and security.</p>
            <ul>
                <li><strong>Benefits:</strong> Reduced network traffic, improved security, simplified management</li>
                <li><strong>CIDR Notation:</strong> Classless Inter-Domain Routing (e.g., 192.168.1.0/24)</li>
                <li><strong>VLSM:</strong> Variable Length Subnet Masking for efficient IP allocation</li>
            </ul>
            
            <h3>Private IP Address Ranges</h3>
            <ul>
                <li><strong>Class A:</strong> 10.0.0.0 to 10.255.255.255</li>
                <li><strong>Class B:</strong> 172.16.0.0 to 172.31.255.255</li>
                <li><strong>Class C:</strong> 192.168.0.0 to 192.168.255.255</li>
            </ul>
            
            <h3>Subnetting Example</h3>
            <p>Let's subnet 192.168.1.0/24 into 4 subnets:</p>
            <pre><code>Original Network: 192.168.1.0/24
Subnet Mask: 255.255.255.0
Available Hosts: 254

After subnetting into 4 subnets:
- Subnet 1: 192.168.1.0/26 (62 hosts)
- Subnet 2: 192.168.1.64/26 (62 hosts)
- Subnet 3: 192.168.1.128/26 (62 hosts)
- Subnet 4: 192.168.1.192/26 (62 hosts)

New Subnet Mask: 255.255.255.192</code></pre>
            
            <h3>CIDR Notation</h3>
            <p>CIDR (Classless Inter-Domain Routing) notation represents IP addresses and their routing prefix in a compact form:</p>
            <ul>
                <li>/24 = 255.255.255.0 (256 addresses)</li>
                <li>/25 = 255.255.255.128 (128 addresses)</li>
                <li>/26 = 255.255.255.192 (64 addresses)</li>
                <li>/27 = 255.255.255.224 (32 addresses)</li>
                <li>/28 = 255.255.255.240 (16 addresses)</li>
                <li>/30 = 255.255.255.252 (4 addresses)</li>
            </ul>
            
            <div class="quiz-container">
                <h4>Quick Quiz</h4>
                <p>Which IP address class is used for large networks and has a default subnet mask of 255.0.0.0?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="true">Class A</div>
                    <div class="quiz-option" data-correct="false">Class B</div>
                    <div class="quiz-option" data-correct="false">Class C</div>
                    <div class="quiz-option" data-correct="false">Class D</div>
                </div>
            </div>
        `
    }
];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const heroLoginBtn = document.getElementById('heroLoginBtn');
const ctaSignupBtn = document.getElementById('ctaSignupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const tutorialModal = document.getElementById('tutorialModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const closeTutorialModal = document.getElementById('closeTutorialModal');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const dashboard = document.getElementById('dashboard');
const heroSection = document.getElementById('home');
const tutorialsGrid = document.getElementById('tutorialsGrid');
const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const tutorialTitle = document.getElementById('tutorialTitle');
const tutorialContent = document.getElementById('tutorialContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const downloadTxtBtn = document.getElementById('downloadTxtBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Current user and tutorial state
let currentUser = null;
let currentTutorialIndex = 0;
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
let currentCategory = 'all';

// Initialize the application
function init() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    }

    // Render tutorial cards
    renderTutorialCards();

    // Add event listeners
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Modal open/close events
    loginBtn.addEventListener('click', () => openModal(loginModal));
    signupBtn.addEventListener('click', () => openModal(signupModal));
    heroLoginBtn.addEventListener('click', () => openModal(loginModal));
    ctaSignupBtn.addEventListener('click', () => openModal(signupModal));
    
    closeLoginModal.addEventListener('click', () => closeModal(loginModal));
    closeSignupModal.addEventListener('click', () => closeModal(signupModal));
    closeTutorialModal.addEventListener('click', () => closeModal(tutorialModal));
    
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });
    
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });

    // Form submission events
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    
    // Logout event
    logoutBtn.addEventListener('click', handleLogout);

    // Tutorial navigation events
    prevBtn.addEventListener('click', showPreviousTutorial);
    nextBtn.addEventListener('click', showNextTutorial);

    // Download buttons
    downloadPdfBtn.addEventListener('click', downloadAsPdf);
    downloadTxtBtn.addEventListener('click', downloadAsText);

    // Category filter events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter tutorials
            currentCategory = btn.dataset.category;
            renderTutorialCards();
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === signupModal) closeModal(signupModal);
        if (e.target === tutorialModal) closeModal(tutorialModal);
    });
}

// Render tutorial cards based on current category
function renderTutorialCards() {
    tutorialsGrid.innerHTML = '';
    
    const filteredTutorials = currentCategory === 'all' 
        ? tutorials 
        : tutorials.filter(t => t.category === currentCategory);
    
    filteredTutorials.forEach(tutorial => {
        const progress = userProgress[tutorial.id] || 0;
        const card = document.createElement('div');
        card.className = `tutorial-card ${tutorial.category}`;
        card.innerHTML = `
            <div class="card-icon">
                <i class="${tutorial.icon}"></i>
            </div>
            <h3>${tutorial.title}</h3>
            <p>${tutorial.description}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${progress}%"></div>
            </div>
            <div class="card-footer">
                <span>${progress}% Complete</span>
                <button class="btn ${progress === 100 ? 'btn-completed' : 'btn-start'}" data-id="${tutorial.id}">
                    ${progress === 100 ? 'Completed' : 'Start Learning'}
                </button>
            </div>
        `;
        
        tutorialsGrid.appendChild(card);
        
        // Add click event to tutorial card buttons
        const startBtn = card.querySelector('.btn');
        startBtn.addEventListener('click', () => openTutorial(tutorial.id));
    });
}

// Open tutorial modal
function openTutorial(id) {
    const tutorial = tutorials.find(t => t.id === id);
    if (!tutorial) return;
    
    currentTutorialIndex = tutorials.indexOf(tutorial);
    tutorialTitle.textContent = tutorial.title;
    tutorialContent.innerHTML = tutorial.content;
    
    // Set up quiz functionality
    setupQuizFunctionality();
    
    // Update navigation buttons
    updateTutorialNavigation();
    
    openModal(tutorialModal);
}

// Set up quiz functionality
function setupQuizFunctionality() {
    const quizOptions = tutorialContent.querySelectorAll('.quiz-option');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selections
            quizOptions.forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Mark this option as selected
            this.classList.add('selected');
            
            // Check if correct
            if (this.getAttribute('data-correct') === 'true') {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
                
                // Highlight correct answer
                quizOptions.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('correct');
                    }
                });
            }
        });
    });
}

// Update tutorial navigation buttons
function updateTutorialNavigation() {
    prevBtn.style.display = currentTutorialIndex > 0 ? 'block' : 'none';
    nextBtn.textContent = currentTutorialIndex < tutorials.length - 1 ? 'Next' : 'Complete';
}

// Show previous tutorial
function showPreviousTutorial() {
    if (currentTutorialIndex > 0) {
        currentTutorialIndex--;
        openTutorial(tutorials[currentTutorialIndex].id);
    }
}

// Show next tutorial
function showNextTutorial() {
    if (currentTutorialIndex < tutorials.length - 1) {
        currentTutorialIndex++;
        openTutorial(tutorials[currentTutorialIndex].id);
    } else {
        // Mark tutorial as completed
        const currentTutorial = tutorials[currentTutorialIndex];
        userProgress[currentTutorial.id] = 100;
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
        
        // Update UI
        renderTutorialCards();
        closeModal(tutorialModal);
        
        // Show completion message
        alert(`Congratulations! You've completed the "${currentTutorial.title}" tutorial.`);
    }
}

// Download as PDF
function downloadAsPdf() {
    const tutorial = tutorials[currentTutorialIndex];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.text(tutorial.title, 20, 20);
    
    // Add content (simplified for demo)
    const content = tutorial.content.replace(/<[^>]*>/g, '');
    const lines = doc.splitTextToSize(content, 170);
    doc.setFontSize(12);
    doc.text(lines, 20, 40);
    
    // Save the PDF
    doc.save(`${tutorial.title.replace(/\s+/g, '_')}.pdf`);
}

// Download as Text
function downloadAsText() {
    const tutorial = tutorials[currentTutorialIndex];
    const content = tutorial.content.replace(/<[^>]*>/g, '');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tutorial.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showDashboard();
        closeModal(loginModal);
        loginForm.reset();
    } else {
        alert('Invalid email or password');
    }
}

// Handle signup
function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        alert('User with this email already exists');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showDashboard();
    closeModal(signupModal);
    signupForm.reset();
}

// Handle logout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLoginScreen();
}

// Show dashboard
function showDashboard() {
    heroSection.style.display = 'none';
    dashboard.style.display = 'block';
    userName.textContent = currentUser.name;
    userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show login screen
function showLoginScreen() {
    heroSection.style.display = 'block';
    dashboard.style.display = 'none';
}

// Open modal
function openModal(modal) {
    modal.style.display = 'flex';
}

// Close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Initialize the app
init();