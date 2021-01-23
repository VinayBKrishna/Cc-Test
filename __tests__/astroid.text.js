import React from "react";
import {Button, TouchableOpacity} from "react-native";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import Home from "../screens/home";
import {mount} from "enzyme";
import navigation from "../navigation/navigation";

const mockStore = configureMockStore();

const store = mockStore({
  astroidState: {
      
        initialReducer = []
    
  },
});

const createTextProps = (props)=>({
    navigation:{
        navigate:jest.fn()
    },
    ...props
})

describe("astorid screen",()=>{
    describe("rendering",()=>{
        let props = createTextProps({})
        beforeEach(()=>{
            props = {navigation:{
                navigate:jest.fn(()=>console.log("called"))
            }}
            Object.defineProperty(depandencies,"astroid Search",{
                value:jest.fn(()=>{
                    return ()=>{
                        return new Promise((res,rej)=>{
                            res("done")
                        })
                    }
                })
            })
            const wrapper = mount(
                <Provider store={store} >
                    <Home {...props} />
                </Provider>
            )
            it("there should be two buttons",async()=>{
                expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
            })
        })
    })
})

