<template>
    <div>
        <navigation></navigation>
        <transition-group
                class="container d-flex flex-wrap"
                name="fade"
                mode="out-in"
        >
            <div
                    class="mb-3 col-12"
                    key="deleteBlock"
                    v-if="$cookies.get('auth')"
            >
                <portlet horizontal-full>
                    <template slot="title"
                    >Want to add new Event?</template
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
                <input type="text" class="form-control" placeholder="Event Name" v-model="props.data.name" />

                <label class="mt-3">Start Date</label>
                <input
                        type="datetime-local"
                        class="form-control"
                        v-model="props.data.start_date"
                />

                <label class="mt-3">End Date</label>
                <input
                        type="datetime-local"
                        class="form-control"
                        v-model="props.data.end_date"
                />

                <label class="mt-3">Address</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="Where event will take place?"
                        v-model="props.data.address"
                />

                <label class="mt-3">Description</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="Describe the Event"
                        v-model="props.data.description"
                />
                <label class="mt-3">Category</label>
                <h-select
                        v-model="props.data.categoryValue"
                        label="label"
                        :options="eventsCategories"
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
                <input type="text" class="form-control" placeholder="Event Name" v-model="props.data.name" />

                <label class="mt-3">Start Date</label>
                <input
                        type="datetime-local"
                        class="form-control"
                        v-model="props.data.start_date"
                />

                <label class="mt-3">End Date</label>
                <input
                        type="datetime-local"
                        class="form-control"
                        v-model="props.data.end_date"
                />

                <label class="mt-3">Address</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="Where event will take place?"
                        v-model="props.data.address"
                />

                <label class="mt-3">Description</label>
                <input
                        type="text"
                        class="form-control"
                        placeholder="Describe the Event"
                        v-model="props.data.description"
                />
                <label class="mt-3">Category</label>
                <h-select
                        v-model="props.data.categoryValue"
                        label="label"
                        :options="eventsCategories"
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
        name: "events",
        components: { Modal, Portlet, Navigation, HSelect },
        data() {
            return {
                data: [],
                show: false,
                eventsCategoriesData: [],
                modalEdit: {
                    header: "Edit Events",
                    data: {
                        categoryValue: {
                            label: "Choose a category",
                            value: "1"
                        }
                    },
                    id: "edit-events",
                    show: false
                },
                modalCreate: {
                    header: "Create Events",
                    data: {
                        categoryValue: {
                            label: "Choose a category",
                            value: "1"
                        }
                    },
                    id: "create-events",
                    show: false
                }
            };
        },
        created() {
            this.$http
                .get("http://localhost/events")
                .then(response => (this.data = response.data));
            this.$http
                .get("http://localhost/event-categories")
                .then(response => (this.eventsCategoriesData = response.data));
        },
        computed: {
            refreshData() {
                return this.data;
            },
            eventsCategories() {
                return this.eventsCategoriesData.map(item => {
                    return {
                        label: item.name,
                        value: item.id
                    };
                });
            }
        },
        methods: {
            deleteItem(id) {
                this.$http.delete(`http://localhost/events/${id}`).then(() => {
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
                this.$http.patch(`http://localhost/events/${item.id}`, {
                    name: item.name,
                    start_date: item.start_date,
                    end_date: item.end_date,
                    address: item.address,
                    description: item.description,
                    category_id: item.categoryValue.value
                });
                this.modalEdit.show = false;
            },
            submitData(item) {
                this.modalCreate.show = false;

                this.$http
                    .post("http://localhost/events", {
                        data: {
                            name: item.name,
                            start_date: item.start_date,
                            end_date: item.end_date,
                            address: item.address,
                            description: item.description,
                            category_id: item.categoryValue.value
                        }
                    })
                    .finally(() => {
                        item.name = "";
                        this.$http.get("http://localhost/events").then(response => {
                            this.data = response.data;
                        });
                    });
            }
        }
    };
</script>
