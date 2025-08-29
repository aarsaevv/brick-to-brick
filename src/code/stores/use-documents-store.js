const documents = ref([]);

const addDocument = (document) => {
  documents.value.push(document);

  console.warn('new docs list', documents.value);
};

export default function useDocumentsStore() {
  return {
    documents,
    addDocument,
  };
}
