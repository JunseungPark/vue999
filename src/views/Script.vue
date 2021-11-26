<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="scriptCont">
        <div class="container">
          <WrapTitle name1="Script" name2="Reference" />
          <div class="script__cont">
            <form @submit.prevent="SearchMovies()">
              <div class="search">
                <label for="search" class="sr-only">검색하기</label>
                <input
                  type="search"
                  id="search"
                  placeholder="검색하기"
                  v-model="search"
                />
                <button type="submit" value="search">검색</button>
              </div>
              <div class="script">
                <div v-for="movie in movies" :key="movie.id">
                  <a href="/" target="_blank">
                    <img
                      :src="
                        'https://image.tmdb.org/t/p/original/' +
                        movie.poster_path
                      "
                      :alt="movie.title"
                    />
                    <p class="title">{{ movie.title }}</p>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <!-- //scriptCont -->
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WrapTitle from '@/components/WrapTitle.vue';
import { ref } from 'vue';

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
  },
  setup() {
    const search = ref('');
    const movies = ref([]);
    const dotenv = require('dotenv');
    dotenv.config().parsed;

    const SearchMovies = () => {
      if (search.value != '') {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=3ccbeb5a5f02e27314034715a1526872&query=${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            search.value = '';
            console.log(data.results);
          })
          .catch((error) => console.log('error', error));
      }
    };
    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.script__cont {
  .script {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 200px;
    div {
      flex: 0 0 19%;
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-family: 'SCoreDream';
        margin: 10px 0 50px;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    input {
      flex: 0 0 79%;
      background: transparent;
      border: 0;
      border-bottom: 1px solid #000;
      font-family: 'SCoreDream';
      padding: 15px 10px;
      outline: #000;
      color: #000;
      &::placeholder {
        color: #000;
      }
    }
    button {
      flex: 0 0 20%;
      font-family: 'SCoreDream';
      background: #000;
      border: 1px solid #000;
      color: #fff;
    }
  }
}
.light #scriptCont {
  background-color: #f0eeeb;
  .script__cont {
    color: #000;
  }
}
</style>
