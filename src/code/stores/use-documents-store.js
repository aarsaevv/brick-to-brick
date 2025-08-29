const documents = ref([]);

const addDocument = (document) => {
  documents.value.push(document);
};

export default function useDocumentsStore() {
  return {
    documents,
    addDocument,
  };
}
