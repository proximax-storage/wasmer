use crate::{cache::Artifact, error::InstantiationError, instance::Instance, new};
use std::convert::{AsRef, Infallible};

pub use new::wasm_common::{DataInitializer, ExportIndex};
pub use new::wasmer_runtime::{ModuleInfo, TableElements as TableInitializer};

#[derive(Clone)]
pub struct Module {
    pub(crate) new_module: new::wasmer::Module,
}

impl Module {
    pub(crate) fn new(new_module: new::wasmer::Module) -> Self {
        Self { new_module }
    }

    pub fn instantiate(
        &self,
        import_object: &crate::import::ImportObject,
    ) -> Result<Instance, InstantiationError> {
        Ok(Instance::new(new::wasmer::Instance::new(
            &self.new_module,
            import_object,
        )?))
    }

    pub fn cache(&self) -> Result<Artifact, Infallible> {
        Ok(Artifact::new(self.new_module.clone()))
    }

    pub fn info(&self) -> &ModuleInfo {
        &self.new_module.info()
    }

    pub fn imports(&self) -> Vec<crate::types::ImportDescriptor> {
        self.new_module.imports().collect()
    }

    pub fn exports(&self) -> Vec<crate::types::ExportDescriptor> {
        self.new_module.exports().collect()
    }

    pub fn custom_sections<'a>(&self, name: impl AsRef<str>) -> Option<Vec<Vec<u8>>> {
        let custom_sections: Vec<Vec<u8>> = self
            .new_module
            .custom_sections(name.as_ref())
            .map(|custom_section| custom_section.to_vec())
            .collect();

        if custom_sections.is_empty() {
            None
        } else {
            Some(custom_sections)
        }
    }
}
