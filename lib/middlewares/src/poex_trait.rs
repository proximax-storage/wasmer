use wasmer::MiddlewareReaderState;
use wasmer_types::ModuleInfo;

pub trait PoExImplementation {
    fn insert_global(&mut self, module_info: &mut ModuleInfo);
    fn inject_poex_fn(&self, state: &mut MiddlewareReaderState<'_>, opcode: u8);
    fn inject_poex_fn_at_the_end_of_block(&self, state: &mut MiddlewareReaderState<'_>);
}
