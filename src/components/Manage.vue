<template>
  <main class="bg-[#e9e9e9] px-[12%] py-5 min-h-screen grid items-center">
    <div class="manage-content">
      <div class="home_conntainer rounded-3xl bg-[#E7E8F3]">
        <div class="between-container col-span-2 bg-[#E7E8F3] py-5 pl-5 pr-2">
          <header
            class="flex justify-between items-center text-gray-500"
            data-v-cd2eed4a=""
          >
            <i class="fas fa-bars text-2xl px-2 hidden" data-v-cd2eed4a=""></i
            ><i
              class="fas fa-arrow-left px-2 cursor-pointer hover:text-black"
              data-v-cd2eed4a=""
            ></i
            ><i
              class="fas fa-arrow-right px-4 cursor-pointer hover:text-black"
              data-v-cd2eed4a=""
            ></i>
            <div
              class="main-content__search-form flex justify-around px-5 py-2.25 rounded-2xl bg-white w-full cursor-pointer gap-2"
              data-v-cd2eed4a=""
            >
              <i class="fas fa-search search-btn" data-v-cd2eed4a=""></i
              ><input
                type="text"
                class="search-input outline-none border-none bg-transparent w-full placeholder-gray-400"
                placeholder="Search for artist, songs and..."
                data-v-cd2eed4a=""
              />
            </div>
            <i class="fas fa-bars text-2xl px-4 hidden" data-v-cd2eed4a=""></i>
          </header>
          <div class="overflow-y-scroll tableHeight my-1">
            <v-data-table
              :headers="headers"
              :items="desserts"
              hide-default-footer
              class="songsList"
              sort-by="calories"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Songs</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Add Song
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.name"
                                label="Dessert name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.calories"
                                label="Calories"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.fat"
                                label="Fat (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.carbs"
                                label="Carbs (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.protein"
                                label="Protein (g)"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                          Cancel
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save">
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >Are you sure you want to delete this
                        item?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "ManagePage",
  props: {
    file: {
      type: String,
      default: null,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    headers: [
      {
        text: "#",
        align: "center",
        value: "id",
      },
      { text: "TITLE", align: "center", value: "name" },
      { text: "ARTIST", align: "center", value: "artist" },
      { text: "TIME", align: "center", value: "created_date" },
      { text: "Actions", align: "center", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      songId: 1,
      title: "",
      artist: "",
      time: 0,
    },
    defaultItem: {
      songId: 1,
      title: "",
      artist: "",
      time: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      axios.get("http://localhost:3000/songs").then((response) => {
        this.desserts = response.data;
      });
    },
    ditItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
  mounted() {},
};
</script>
