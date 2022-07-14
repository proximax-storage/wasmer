use dyn_clone::DynClone;
use wasmer::MiddlewareReaderState;
use wasmer_types::ModuleInfo;

pub trait PoEx: DynClone {
    fn add_opcode(&mut self, opcode: u8);
    fn insert_global(&mut self, module_info: &mut ModuleInfo);
    fn inject_poex_fn(&self, state: &mut MiddlewareReaderState<'_>, opcode: u8);
    fn inject_poex_fn_at_the_end_of_block(&mut self, state: &mut MiddlewareReaderState<'_>);
}
