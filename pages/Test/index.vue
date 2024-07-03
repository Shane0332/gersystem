<template>
  <div>
    <div v-if="Bai.length === 0" class="text-center text-gray-500 mt-4">
      Loading Bai...
    </div>
    <div v-else>
      <div v-for="ba in Bai" :key="ba.b_id" @click="handleNewsClick(ba.b_id)"
        class="place-content-center hover:bg-slate-100 cursor-pointer border-2 p-4 mb-4 rounded-lg">
        <h1 class="font-bold text-xl">{{ ba.b_ner }}</h1>
        <p class="overflow-hidden">{{ ba.b_tuhai }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const firebaseUser = useFirebaseUser(); 

    const Bai = ref([]);

    const fetchNews = async () => {
      try {
        const response = await fetch('/api/foo/query?col=Baiguullaga');
        const { result } = await response.json();
        Bai.value = result;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    onMounted(fetchNews);

    const handleNewsClick = (nid) => {
      console.log('Clicked news with nid:', nid);
    };

    return {
      Bai,
      handleNewsClick
    };
  }
};
</script>

<style scoped>
/* Add scoped styles here */
.place-content-center {
  /* Your styles here */
}
.hover\:bg-slate-100:hover {
  /* Your hover styles here */
}
.cursor-pointer {
  cursor: pointer;
}
.border-2 {
  border-width: 2px;
  /* Your border styles here */
}
.font-bold {
  font-weight: bold;
}
.text-xl {
  font-size: 1.25rem;
  /* Your font size styles here */
}
.overflow-hidden {
  overflow: hidden;
  /* Your overflow styles here */
}
</style>
