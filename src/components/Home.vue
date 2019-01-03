<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col-12 col-sm-6">
            <div class="panel">
                <div class="form-group row nopadding">
                    <span class="col-3  col-form-label text-left">Month</span>
                    <model-list-select class="form-control-sm col-9" v-model="advice.month" :list="monthList" option-value="month" optionText="month" placeholder="Select Month"/>
                </div>
                <div class="form-group row nopadding">
                    <span class="col-3 text-left">Pay through</span>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.payThrough" value="bank" @input="wingShow = false">
                        <label class="form-check-label" >Bank</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.payThrough" value="cheque" @input="wingShow = true" >
                        <label class="form-check-label" >Cheque</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.payThrough" value="cash"  @input="wingShow = true" >
                        <label class="form-check-label" >Cash</label>
                    </div>
                </div>
                <div class="form-group row nopadding" v-if="wingShow == false">
                    <span class="col-3 text-left">Filter</span>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.filter" value="None" >
                        <label class="form-check-label" >None</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.filter" value="BdREN">
                        <label class="form-check-label" >BdREN</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.filter" value="SoftwareServices">
                        <label class="form-check-label" >Software Services</label>
                    </div>
                </div>

                <div class="form-group row nopadding" v-if="wingShow == true">
                    <span class="col-3  col-form-label text-left">Wing</span>
                    <model-list-select class="form-control-sm col-9" v-model="advice.wing" :list="wingList" option-value="wing" optionText="wing" placeholder="Select Wing"/>
                </div>
            </div>
            <div class="mt-3 text-right">
                <button class="btn btn-primary ripple">
                    Generate Advice
                </button>
            </div>   
        </div>
    </div>
</template>

<script>

import { ModelListSelect} from 'vue-search-select';

export default {
     components: {
      ModelListSelect
    },
    data(){
        return{
            monthList:[
                { month:  'Sep18' },
                { month : 'Oct18' },
                { month : 'Nov18' },
                { month : 'Dec18' },
                { month : 'Jan19' },
                { month : 'Feb19' },
                { month : 'Mar19' }
            ],
            advice:{},
            wingShow: false,
            wingList:[
                { wing:  'Acquisition' },
                { wing : 'Delivery' },
                { wing : 'Operations' }
            ]
        }

    }
    
}
</script>

<style scoped>

</style>


