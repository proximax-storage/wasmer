initSidebarItems({"constant":[["VERSION","The current version of this crate"]],"fn":[["compile_with","Compile a [`Module`] using the provided compiler from WebAssembly binary code. This function is useful if it is necessary to a compile a module before it can be instantiated and must be used if you wish to use a different backend from the default."],["compile_with_config","The same as `compile_with` but changes the compiler behavior with the values in the `CompilerConfig`"],["load_cache_with","Creates a new module from the given cache [`Artifact`] for the specified compiler backend"],["validate","Perform validation as defined by the WebAssembly specification. Returns `true` if validation succeeded, `false` if validation failed."],["validate_and_report_errors","The same as `validate` but with an Error message on failure"],["validate_and_report_errors_with_features","The same as `validate_and_report_errors` but with a Features."]],"macro":[["func","Helper macro to create a new `Func` object using the provided function pointer."],["imports","Generate an [`ImportObject`] safely."]],"mod":[["cache","The cache module provides the common data structures used by compiler backends to allow serializing compiled wasm code to a binary format.  The binary format can be persisted, and loaded to allow skipping compilation and fast startup."],["codegen","The codegen module provides common functions and data structures used by multiple backends during the code generation process."],["error","The error module contains the data structures and helper functions used to implement errors that are produced and returned from the wasmer runtime core."],["export","The export module contains the implementation data structures and helper functions used to manipulate and access a wasm module's exports including memories, tables, globals, and functions."],["fault","The fault module contains the implementation for handling breakpoints, traps, and signals for wasm code."],["global","The global module contains the implementation data structures and helper functions used to manipulate and access a wasm globals."],["import","The import module contains the implementation data structures and helper functions used to manipulate and access a wasm module's imports including memories, tables, globals, and functions."],["instance","The instance module contains the implementation data structures and helper functions used to manipulate and access wasm instances."],["loader","The loader module functions are used to load an instance."],["memory","The memory module contains the implementation data structures and helper functions used to manipulate and access wasm memory."],["module","The module module contains the implementation data structures and helper functions used to manipulate and access wasm modules."],["parse","The parse module contains common data structures and functions using to parse wasm files into runtime data structures."],["prelude","The prelude module is a helper module used to bring commonly used runtime core imports into scope."],["state","The state module is used to track state of a running web assembly instances so that state could read or updated at runtime. Use cases include generating stack traces, switching generated code from one tier to another, or serializing state of a running instace."],["structures","The structures module contains commonly used data structures."],["table","The runtime table module contains data structures and functions used to create and update wasm tables."],["tiering","The tiering module supports switching between code compiled with different optimization levels as runtime."],["trampoline_x64","Trampoline generator for carrying context with function pointer."],["typed_func","The typed func module implements a way of representing a wasm function with the correct types from rust. Function calls using a typed func have a low overhead."],["types","The runtime types modules represent type used within the wasm runtime and helper functions to convert to other represenations."],["units","The units module provides common WebAssembly units like [`Pages`] and conversion functions into other units."],["vm","The runtime vm module contains data structures and helper functions used during runtime to execute wasm instance functions."]],"struct":[["DynFunc","A representation of an exported WebAssembly function."],["Func","Represents a function that can be used by WebAssembly."],["Instance","An instantiated WebAssembly module."],["Module","A compiled WebAssembly module."]],"trait":[["IsExport","A trait that represents `Export` values."]],"type":[["Result","Aliases the standard `Result` type as `Result` within this module."]]});