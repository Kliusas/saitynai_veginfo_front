<template>
    <div>
        <navigation></navigation>
        <transition-group
                class="container d-flex flex-wrap"
                name="fade"
                mode="out-in"
        >
            <div class="mb-3 col-12" key="deleteBlock" v-if="$cookies.get('auth')">
                <portlet horizontal-full>
                    <template slot="title"
                    >Want to add new Recipe?</template
                    >
                    <template slot="content">
                        <button
                                @click="showModal('create')"
                                class="text-white btn btn-primary m-1 m-md-0 ml-0 ml-md-3"
                        >
                            Create
                        </button>
                    </template>
                </portlet>
            </div>
            <div
                    class="mb-5 col-12 col-md-6 d-flex justify-content-center"
                    v-for="type in refreshData"
                    :key="type.id"
            >
                <portlet horizontal>
                    <template slot="title">{{ type.name }}</template>
                    <template slot="content">
                        <div>
                            <button
                                    v-if="$cookies.get('auth')"
                                    @click="showModal('edit', type)"
                                    class="text-white btn btn-primary m-1 m-md-0 ml-0 ml-md-3"
                            >
                                Edit
                            </button>
                            <button
                                    v-if="$cookies.get('auth')"
                                    @click="deleteItem(type.id)"
                                    class="text-white btn btn-danger m-1 m-md-0 ml-0 ml-md-3"
                            >
                                Delete
                            </button>
                        </div>
                    </template>
                </portlet>
            </div>
        </transition-group>
        <modal
                v-if="modalEdit"
                :title="modalEdit.header"
                :data="modalEdit.data"
                :id="modalEdit.id"
                :show.sync="modalEdit.show"
        >
            <template slot="modal-body" slot-scope="props">
                <label class="mt-3">Name</label>
                <input type="text" class="form-control" placeholder="Recipe Name" v-model="props.data.name" />
                <label class="mt-3">Description</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="Instruction on how to prepare dish"
                        v-model="props.data.description"
                />
                <label class="mt-3">Category</label>
                <h-select
                        v-model="props.data.categoryValue"
                        label="label"
                        :options="recipesCategories"
                />
                <label class="mt-3">Preparation Time</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="How long will it take to make it?"
                        v-model="props.data.preparation_time"
                />
                <label class="mt-3">Difficulty</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="How difficult is it to prepare?"
                        v-model="props.data.difficulty"
                />
                <label class="mt-3">Products</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="What do you need for this dish?"
                        v-model="props.data.products"
                />
            </template>
            <template slot="modal-footer" slot-scope="props">
                <button class="btn btn-danger mr-1" @click="props.methods.close">
                    Cancel
                </button>
                <button class="btn btn-info" @click="updateData(props.data)">
                    Save
                </button>
            </template>
        </modal>
        <modal
                v-if="modalCreate"
                :title="modalCreate.header"
                :data="modalCreate.data"
                :id="modalCreate.id"
                :show.sync="modalCreate.show"
        >
            <template slot="modal-body" slot-scope="props">
                <label class="mt-3">Name</label>
                <input type="text" class="form-control" placeholder="Recipe Name" v-model="props.data.name" />
                <label class="mt-3">Description</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="Instruction on how to prepare dish"
                        v-model="props.data.description"
                />
                <label class="mt-3">Category</label>
                <h-select
                        v-model="props.data.categoryValue"
                        label="label"
                        :options="dishesCategories"
                />
                <label class="mt-3">Preparation Time</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="How long will it take to make it?"
                        v-model="props.data.preparation_time"
                />
                <label class="mt-3">Difficulty</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="How difficult is it to prepare?"
                        v-model="props.data.difficulty"
                />
                <label class="mt-3">Products</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="What do you need for this dish?"
                        v-model="props.data.products"
                />
            </template>
            <template slot="modal-footer" slot-scope="props">
                <button class="btn btn-danger mr-1" @click="props.methods.close">
                    Cancel
                </button>
                <button class="btn btn-info" @click="submitData(props.data)">
                    Create
                </button>
            </template>
        </modal>
    </div>
</template>
<script>
    import Navigation from "../../components/Navigation";
    import Portlet from "../../components/Portlet";
    import Modal from "../../components/Modal";
    import HSelect from "../../components/HSelect";

    export default {
        name: "recipes",
        components: { Modal, Portlet, Navigation, HSelect },
        data() {
            return {
                data: [],
                show: false,
                dishesCategoriesData: [],
                modalEdit: {
                    header: "Edit Recipes",
                    data: {
                        categoryValue: {
                            label: "Choose a category",
                            value: "1"
                        }
                    },
                    id: "edit-recipes",
                    show: false
                },
                modalCreate: {
                    header: "Create Recipes",
                    data: {
                        categoryValue: {
                            label: "Choose a category",
                            value: "1"
                        }
                    },
                    id: "create-recipes",
                    show: false
                }
            };
        },
        created() {
            this.$http
                .get("http://localhost/recipes")
                .then(response => (this.data = response.data));
            this.$http
                .get("http://localhost/dishes-categories")
                .then(response => (this.dishesCategoriesData = response.data));
        },
        computed: {
            refreshData() {
                return this.data;
            },
            dishesCategories() {
                return this.dishesCategoriesData.map(item => {
                    return {
                        label: item.name,
                        value: item.id
                    };
                });
            }
        },
        methods: {
            deleteItem(id) {
                this.$http.delete(`http://localhost/recipes/${id}`).then(() => {
                    this.data.splice(this.data.findIndex(x => x.id === id), 1);
                });
            },
            showModal(modalType, type = null) {
                if (modalType === "create") {
                    this.modalCreate.show = true;
                } else if (modalType === "edit") {
                    this.modalEdit.show = true;
                    this.modalEdit.data = type;
                }

                window.document.body.style.overflowY = "hidden";
            },
            updateData(item) {
                this.$http.patch(`http://localhost/recipes/${item.id}`, {
                    name: item.name,
                    description: item.description,
                    category_id: item.categoryValue.value,
                    preparation_time: item.preparation_time,
                    difficulty: item.difficulty,
                    products: item.products
                });
                this.modalEdit.show = false;
            },
            submitData(item) {
                this.modalCreate.show = false;

                this.$http
                    .post("http://localhost/recipes", {
                        name: item.name,
                        description: item.description,
                        category_id: item.categoryValue.value,
                        preparation_time: item.preparation_time,
                        difficulty: item.difficulty,
                        products: item.products
                    })
                    .finally(() => {
                        item.name = "";
                        this.$http.get("http://localhost/recipes").then(response => {
                            this.data = response.data;
                        });
                    });
            }
        }
    };
</script>
