import AddDocumentModal from '@/components/modals/AddDocumentModal.vue';

// Решил не тащить зависимости, написал небольшой синглтон для модалок
// В продакшн коде, конечно, написал бы стор через Pinia
const modalDict = {
  add_doc: AddDocumentModal,
};

const currentModalName = ref(null);

const setCurrentModalName = (name) => {
  currentModalName.value = name;
};

const resetCurrentModalName = () => {
  setCurrentModalName(null);
};

const currentModalComponent = computed(() => {
  if (currentModalName.value) {
    return modalDict[currentModalName.value];
  }
});

const isModalOpened = computed(() => currentModalName.value !== null);

export default function useModal() {
  return {
    setCurrentModalName,
    resetCurrentModalName,
    currentModalComponent,
    isModalOpened,
  };
}
