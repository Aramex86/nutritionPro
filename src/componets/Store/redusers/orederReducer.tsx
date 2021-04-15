// import { Dispatch } from "react";
// import { ThunkAction } from "redux-thunk";
import { DataType } from "../../../Types/types";
// import { AppStateType } from "../store";

const FILTER_DATA_DATE = "FILTER_DATA_DATE";
const FILTER_DATA_START_DATE = "FILTER_DATA_START_DATE";
const FILTER_DATA_MEALS = "FILTER_DATA_MEALS";
const FILTER_DATA_INVOICE = "FILTER_DATA_INVOICE";

const initialState = {
  data: [
    {
      id: 1,
      date: "1/21/2021",
      firstNameLastName: "Rhea Bloom",
      phone: "4-861-713-7200",
      email: "Rhea_Bloom5883@tonsy.org",
      startDate: "3/15/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 2,
      date: "1/19/2021",
      firstNameLastName: "Sofia Isaac",
      phone: "8-175-350-7812",
      email: "Sofia_Isaac8456@twipet.com",
      startDate: "3/18/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 3,
      date: "1/20/2021",
      firstNameLastName: "David Burnley",
      phone: "8-673-204-4110",
      email: "David_Burnley6342@brety.org",
      startDate: "3/18/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 4,
      date: "1/9/2021",
      firstNameLastName: "Emery Rixon",
      phone: "4-500-605-6520",
      email: "Emery_Rixon5268@zorer.org",
      startDate: "3/9/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 5,
      date: "1/29/2021",
      firstNameLastName: "Lana Gordon",
      phone: "4-746-040-7574",
      email: "Lana_Gordon405@kideod.biz",
      startDate: "4/5/2021",
      meals: 2,
      invoice: false,
    },
    {
      id: 6,
      date: "1/10/2021",
      firstNameLastName: "Manuel Clifford",
      phone: "2-187-005-2461",
      email: "Manuel_Clifford9063@twipet.com",
      startDate: "3/21/2021",
      meals: 3,
      invoice: false,
    },
    {
      id: 7,
      date: "1/3/2021",
      firstNameLastName: "Harvey Hill",
      phone: "6-424-817-7287",
      email: "Harvey_Hill8108@hourpy.biz",
      startDate: "3/19/2021",
      meals: 3,
      invoice: false,
    },
    {
      id: 8,
      date: "2/25/2021",
      firstNameLastName: "Russel Mcgregor",
      phone: "0-411-148-6210",
      email: "Russel_Mcgregor636@typill.biz",
      startDate: "4/6/2021",
      meals: 3,
      invoice: false,
    },
    {
      id: 9,
      date: "2/10/2021",
      firstNameLastName: "Ron Harris",
      phone: "5-730-810-5026",
      email: "Ron_Harris1340@typill.biz",
      startDate: "3/12/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 10,
      date: "1/31/2021",
      firstNameLastName: "Luke Roberts",
      phone: "8-652-524-3813",
      email: "Luke_Roberts2435@nanoff.biz",
      startDate: "4/4/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 11,
      date: "2/11/2021",
      firstNameLastName: "Benny Spencer",
      phone: "7-215-875-8138",
      email: "Benny_Spencer7500@deavo.com",
      startDate: "3/15/2021",
      meals: 4,
      invoice: false,
    },
    {
      id: 12,
      date: "1/5/2021",
      firstNameLastName: "Ramon Smith",
      phone: "6-220-606-8411",
      email: "Ramon_Smith2868@atink.com",
      startDate: "3/18/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 13,
      date: "1/1/2021",
      firstNameLastName: "Clint Coates",
      phone: "7-556-086-7136",
      email: "Clint_Coates1771@muall.tech",
      startDate: "3/31/2021",
      meals: 3,
      invoice: false,
    },
    {
      id: 14,
      date: "2/1/2021",
      firstNameLastName: "Lucas Sherry",
      phone: "8-713-784-3213",
      email: "Lucas_Sherry7738@twace.org",
      startDate: "3/11/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 15,
      date: "1/2/2021",
      firstNameLastName: "Makena Exton",
      phone: "0-364-262-3875",
      email: "Makena_Exton7414@gompie.com",
      startDate: "3/28/2021",
      meals: 4,
      invoice: false,
    },
    {
      id: 16,
      date: "1/24/2021",
      firstNameLastName: "Candice Rowlands",
      phone: "3-753-588-7706",
      email: "Candice_Rowlands7696@guentu.biz",
      startDate: "3/25/2021",
      meals: 4,
      invoice: false,
    },
    {
      id: 17,
      date: "2/11/2021",
      firstNameLastName: "Colleen Ellis",
      phone: "7-251-845-1237",
      email: "Colleen_Ellis6216@tonsy.org",
      startDate: "3/28/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 18,
      date: "2/26/2021",
      firstNameLastName: "Owen Connor",
      phone: "4-236-873-3062",
      email: "Owen_Connor6888@twace.org",
      startDate: "3/6/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 19,
      date: "2/3/2021",
      firstNameLastName: "Marigold Quinn",
      phone: "1-230-584-2827",
      email: "Marigold_Quinn5876@kideod.biz",
      startDate: "4/4/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 20,
      date: "1/27/2021",
      firstNameLastName: "Summer Cooper",
      phone: "6-815-337-5510",
      email: "Summer_Cooper9699@atink.com",
      startDate: "3/13/2021",
      meals: 4,
      invoice: false,
    },
    {
      id: 21,
      date: "2/7/2021",
      firstNameLastName: "Leroy Rehman",
      phone: "4-577-606-8141",
      email: "Leroy_Rehman4038@qater.org",
      startDate: "3/18/2021",
      meals: 2,
      invoice: false,
    },
    {
      id: 22,
      date: "2/23/2021",
      firstNameLastName: "Megan Ramsey",
      phone: "3-586-533-6816",
      email: "Megan_Ramsey7893@kideod.biz",
      startDate: "4/5/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 23,
      date: "1/2/2021",
      firstNameLastName: "Carol Porter",
      phone: "8-472-525-8510",
      email: "Carol_Porter4798@ovock.tech",
      startDate: "3/27/2021",
      meals: 3,
      invoice: false,
    },
    {
      id: 24,
      date: "2/10/2021",
      firstNameLastName: "Kieth York",
      phone: "7-460-400-2477",
      email: "Kieth_York5829@womeona.net",
      startDate: "3/19/2021",
      meals: 2,
      invoice: false,
    },
    {
      id: 25,
      date: "2/8/2021",
      firstNameLastName: "Melanie Darcy",
      phone: "7-150-002-2402",
      email: "Melanie_Darcy5848@muall.tech",
      startDate: "4/4/2021",
      meals: 2,
      invoice: false,
    },
    {
      id: 26,
      date: "1/4/2021",
      firstNameLastName: "Michael Simmons",
      phone: "5-267-771-0286",
      email: "Michael_Simmons4260@bauros.biz",
      startDate: "3/27/2021",
      meals: 2,
      invoice: false,
    },
    {
      id: 27,
      date: "1/24/2021",
      firstNameLastName: "Courtney Carter",
      phone: "4-732-734-5404",
      email: "Courtney_Carter6721@bretoux.com",
      startDate: "3/18/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 28,
      date: "1/31/2021",
      firstNameLastName: "Clint Farrant",
      phone: "0-703-060-3336",
      email: "Clint_Farrant319@deons.tech",
      startDate: "3/15/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 29,
      date: "2/15/2021",
      firstNameLastName: "Adeline Flynn",
      phone: "1-887-156-5365",
      email: "Adeline_Flynn453@bulaffy.com",
      startDate: "3/30/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 30,
      date: "1/27/2021",
      firstNameLastName: "Phoebe Rixon",
      phone: "8-132-418-3403",
      email: "Phoebe_Rixon5024@tonsy.org",
      startDate: "3/3/2021",
      meals: 2,
      invoice: false,
    },
    {
      id: 31,
      date: "1/19/2021",
      firstNameLastName: "Keira Edwards",
      phone: "8-826-043-6551",
      email: "Keira_Edwards145@eirey.tech",
      startDate: "3/16/2021",
      meals: 3,
      invoice: false,
    },
    {
      id: 32,
      date: "2/19/2021",
      firstNameLastName: "Lana Burnley",
      phone: "8-118-456-1281",
      email: "Lana_Burnley8661@fuliss.net",
      startDate: "4/4/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 33,
      date: "2/26/2021",
      firstNameLastName: "Anne Coleman",
      phone: "2-840-522-3414",
      email: "Anne_Coleman6544@sveldo.biz",
      startDate: "3/19/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 34,
      date: "2/4/2021",
      firstNameLastName: "Jack Parker",
      phone: "4-368-122-3275",
      email: "Jack_Parker2810@acrit.org",
      startDate: "4/2/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 35,
      date: "2/4/2021",
      firstNameLastName: "Tom Booth",
      phone: "4-246-315-8776",
      email: "Tom_Booth6374@yahoo.com",
      startDate: "3/8/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 36,
      date: "2/19/2021",
      firstNameLastName: "Macy Vallory",
      phone: "3-505-578-3787",
      email: "Macy_Vallory5800@elnee.tech",
      startDate: "3/19/2021",
      meals: 4,
      invoice: false,
    },
    {
      id: 37,
      date: "2/17/2021",
      firstNameLastName: "Johnathan Quinn",
      phone: "3-180-444-6788",
      email: "Johnathan_Quinn1868@tonsy.org",
      startDate: "3/31/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 38,
      date: "1/2/2021",
      firstNameLastName: "Bryon Ward",
      phone: "0-375-218-2473",
      email: "Bryon_Ward7364@joiniaa.com",
      startDate: "3/14/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 39,
      date: "2/5/2021",
      firstNameLastName: "Jacob Shea",
      phone: "0-023-846-5417",
      email: "Jacob_Shea2013@muall.tech",
      startDate: "3/30/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 40,
      date: "1/2/2021",
      firstNameLastName: "Joyce Hill",
      phone: "0-338-361-2170",
      email: "Joyce_Hill1743@qater.org",
      startDate: "4/2/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 41,
      date: "1/5/2021",
      firstNameLastName: "Rocco Plant",
      phone: "7-685-400-5322",
      email: "Rocco_Plant5954@sheye.org",
      startDate: "3/2/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 42,
      date: "1/1/2021",
      firstNameLastName: "Blake Paterson",
      phone: "2-724-750-1843",
      email: "Blake_Paterson5543@gmail.com",
      startDate: "4/6/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 43,
      date: "1/9/2021",
      firstNameLastName: "Celia Jennson",
      phone: "7-612-068-7622",
      email: "Celia_Jennson9124@cispeto.com",
      startDate: "3/23/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 44,
      date: "1/3/2021",
      firstNameLastName: "Aileen Willis",
      phone: "5-343-255-5638",
      email: "Aileen_Willis6380@elnee.tech",
      startDate: "3/25/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 45,
      date: "1/10/2021",
      firstNameLastName: "Michaela Cooper",
      phone: "7-718-643-0152",
      email: "Michaela_Cooper3477@ovock.tech",
      startDate: "3/25/2021",
      meals: 2,
      invoice: true,
    },
    {
      id: 46,
      date: "1/5/2021",
      firstNameLastName: "Logan Flack",
      phone: "6-375-504-2673",
      email: "Logan_Flack7827@nimogy.biz",
      startDate: "3/16/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 47,
      date: "2/25/2021",
      firstNameLastName: "Sage Olivier",
      phone: "6-485-263-5682",
      email: "Sage_Olivier4849@famism.biz",
      startDate: "3/10/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 48,
      date: "1/25/2021",
      firstNameLastName: "Fred Abbey",
      phone: "1-513-154-8203",
      email: "Fred_Abbey1595@grannar.com",
      startDate: "3/28/2021",
      meals: 3,
      invoice: true,
    },
    {
      id: 49,
      date: "2/23/2021",
      firstNameLastName: "Francesca Trent",
      phone: "6-013-217-6464",
      email: "Francesca_Trent3913@nickia.com",
      startDate: "3/26/2021",
      meals: 4,
      invoice: true,
    },
    {
      id: 50,
      date: "2/27/2021",
      firstNameLastName: "Chanelle Oliver",
      phone: "5-551-578-4746",
      email: "Chanelle_Oliver9652@brety.org",
      startDate: "3/6/2021",
      meals: 3,
      invoice: true,
    },
  ] as Array<DataType>,
  filterData: [] as Array<DataType>,
};

type initialStateType = typeof initialState;

type ActionsTypes = FilterDateType|FilterStartDateType|FilterMeals|FilterInvoice;

// type DispatchType = Dispatch<ActionsTypes>;
// type ThunkType = ThunkAction<
//   Promise<void>,
//   AppStateType,
//   unknown,
//   ActionsTypes
// >;

const orderReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case FILTER_DATA_DATE: {
      return {
        ...state,
        filterData: state.data.filter(
          (item) => item["date"] === action.value
        ),
      };
    }
    case FILTER_DATA_START_DATE: {
      return {
        ...state,
        filterData:state.data.filter(item=> item['startDate'] === action.value)
      };
    }
    case FILTER_DATA_MEALS:{
      return{
        ...state,
        filterData:state.data.filter(item=> item['meals'] === action.value)
      }
    }
    case FILTER_DATA_INVOICE:{
      return{
        ...state,
        filterData:state.data.filter(item => {
          if(action.value.toLowerCase() === 'paid' && item['invoice']===true){
            return item
          }else if(action.value.toLowerCase() ==='unpaid' && item['invoice']===false){
            return item
          }
        })
      }
    }
    default:
      return state;
  }
};

type FilterDateType = {
  type: typeof FILTER_DATA_DATE;
  value:string
};

export const filterDate = (value:string): FilterDateType => {
  return { type: FILTER_DATA_DATE,value };
};

type FilterStartDateType = {
  type: typeof FILTER_DATA_START_DATE;
  value:string
};

export const filterStartDate = (value:string): FilterStartDateType => {
  return { type: FILTER_DATA_START_DATE ,value};
};

type FilterMeals={
  type:typeof FILTER_DATA_MEALS
  value:number
}

export const filterMeals=(value:number):FilterMeals=>{
  return{type:FILTER_DATA_MEALS,value}
}
type FilterInvoice={
  type:typeof FILTER_DATA_INVOICE
  value:string
}

export const filterInvoice=(value:string):FilterInvoice=>{
  return{type:FILTER_DATA_INVOICE,value}
}




export default orderReducer;
