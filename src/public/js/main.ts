import axios from "axios";
import * as M from "materialize-css";
import Vue from "vue";

// tslint:disable-next-line no-unused-expression
new Vue( {
    computed: {
        hazGuitars(): boolean {
            return !this.isLoading && this.guitars.length > 0;
        },
        noGuitars(): boolean {
            return !this.isLoading && this.guitars.length === 0;
        }
    },
    data: {
        brand: "",
        color: "",
        guitars: new Array(),
        isLoading: true,
        model: "",
        selectedGuitar: "",
        selectedGuitarId: 0,
        year: ""
    },
    el: "#app",
    methods: {
        addGuitar(){
            const guitar = {
                brand: this.brand,
                color: this.color,
                model: this.model,
                year: this.year
            };
            axios
                .post( "/api/guitars/add", guitar )
                .then( () => {
                    if (typeof this.$refs !== "undefined") {
                        // @ts-ignore
                        this.$refs.year.focus();
                    }
                    this.brand = "";
                    this.color = "";
                    this.model = "";
                    this.year = "";
                    // @ts-ignore
                    this.loadGuitars();
                } )
                .catch( ( err: any ) => {
                    // tslint:disable-next-line:no-console
                    console.log( err );
                } );
        },
        confirmDeleteGuitar(id: string ) {
            const guitar = this.guitars.find( ( g ) => g.id === id );
            this.selectedGuitar = `${ guitar.year } ${ guitar.brand } ${ guitar.model }`;
            this.selectedGuitarId = guitar.id;
            const dc = this.$refs.deleteConfirm;
            const modal = M.Modal.init(dc as Element);
            modal.open();
        },
        deleteGuitar(id: string ) {
            axios
                .delete( `/api/guitars/remove/${ id }` )
                // @ts-ignore
                .then( this.loadGuitars )
                .catch( ( err: any ) => {
                    // tslint:disable-next-line:no-console
                    console.log( err );
                } );
        },
        loadGuitars() {
            axios
                .get( "/api/guitars/all" )
                .then( ( res: any ) => {
                    this.isLoading = false;
                    this.guitars = res.data;
                } )
                .catch( ( err: any ) => {
                    // tslint:disable-next-line:no-console
                    console.log( err );
                } );
        }
    },
    mounted() {
        // @ts-ignore
        return this.loadGuitars();
    }
} );