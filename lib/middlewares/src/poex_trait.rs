use wasmer::{MiddlewareReaderState, Instance};
use wasmer_types::ModuleInfo;

pub trait PoEx {
    fn add_opcode(&mut self, opcode: u8);
    fn inject_poex_fn_at_the_end_of_block(&mut self, state: &mut MiddlewareReaderState<'_>);
}

pub trait PoExBuilder {
    fn init_with_instance(&mut self, instance: &Instance) -> Result<(), std::io::Error>;
    fn insert_global(&mut self, module_info: &mut ModuleInfo);
    fn get_poex(&self) -> Box<dyn PoEx>;
}
