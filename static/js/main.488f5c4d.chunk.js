(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),m=a.n(r),c=(a(16),a(2)),l=a(3),i=a(5),u=a(4),b=a(6),o=a(1),h=(a(17),a(18),function(){return s.a.createElement("div",{className:"header"},s.a.createElement("h3",{className:"header__heading"},"Phone Directory"))}),d=(a(19),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={name:"",phone_number:""},e.onNameChange=e.onNameChange.bind(Object(o.a)(Object(o.a)(e))),e.onNumberChange=e.onNumberChange.bind(Object(o.a)(Object(o.a)(e))),e.onSubmit=e.onSubmit.bind(Object(o.a)(Object(o.a)(e))),e}return Object(b.a)(t,e),Object(l.a)(t,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onNumberChange",value:function(e){this.setState({phone__number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.state.name&&this.state.phone__number&&this.props.handleSubAdd({name:this.state.name,number:this.state.phone__number})}},{key:"render",value:function(){return s.a.createElement("div",{className:"form"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("label",{className:"form__input__label--name",htmlFor:"form-name"},"Name:"),s.a.createElement("input",{className:"form__input--name",type:"text",id:"form-name",name:"name",placeholder:"Name",value:this.state.name,onChange:this.onNameChange}),s.a.createElement("label",{className:"form__input__label--number",htmlFor:"form-num"},"Phone:"),s.a.createElement("input",{className:"form__input--number",type:"text",id:"form-num",name:"number",placeholder:"Phone number",defaultValue:this.state.phone__number,onChange:this.onNumberChange}),s.a.createElement("div",{className:"form__subscriber"},s.a.createElement("h4",{className:"form__subscriber--title"},"Subscriber to be added:"),s.a.createElement("p",{className:"form__subscriber--name"},"Name : ",s.a.createElement("span",{className:"form__subscriber--name--content"},this.state.name)," "),s.a.createElement("p",{className:"form__subscriber--number"},"Phone : ",s.a.createElement("span",{className:"form__subscriber--name--content"},this.state.phone__number))),s.a.createElement("button",{onClick:this.onSubmit,className:"form__btn--add"},"Add")))}}]),t}(n.Component)),_=(a(8),function(e){return s.a.createElement("div",{className:"list__indv"},s.a.createElement("span",{className:"list__name"},e.name),s.a.createElement("span",{className:"list__number"},e.number),s.a.createElement("button",{className:"list__delete",id:e.i,onClick:e.handleDelete},"Delete"))}),f=function(e){return s.a.createElement("div",{className:"list"},s.a.createElement("span",{className:"list__name"},"Name"),s.a.createElement("span",{className:"list__number"},"Number"),e.subscribers.map(function(t,a){return s.a.createElement(_,{i:a,handleDelete:e.handleDelete,name:t.name,number:t.number,key:a})}))},p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleAddBtn=e.handleAddBtn.bind(Object(o.a)(Object(o.a)(e))),e.handleBackBtn=e.handleBackBtn.bind(Object(o.a)(Object(o.a)(e))),e.handleSubAdd=e.handleSubAdd.bind(Object(o.a)(Object(o.a)(e))),e.handleDelete=e.handleDelete.bind(Object(o.a)(Object(o.a)(e))),e.state={isForm:!1,subscribers:[]},e}return Object(b.a)(t,e),Object(l.a)(t,[{key:"handleAddBtn",value:function(e){e.preventDefault(),this.setState({isForm:!this.state.isForm})}},{key:"handleSubAdd",value:function(e){var t=this.state.subscribers;t.push(e),this.setState({subscribers:t,isForm:!this.state.isForm})}},{key:"handleBackBtn",value:function(e){e.preventDefault(),this.setState({isForm:!this.state.isForm})}},{key:"handleDelete",value:function(e){var t=this.state.subscribers.filter(function(t,a){return a!==parseInt(e.target.id)});this.setState({subscribers:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,null),this.state.isForm?s.a.createElement("button",{className:"btn--back",onClick:this.handleBackBtn},"Back"):s.a.createElement("button",{className:"btn--add",onClick:this.handleAddBtn},"Add"),this.state.isForm?s.a.createElement(d,{handleSubAdd:this.handleSubAdd}):s.a.createElement(f,{handleDelete:this.handleDelete,subscribers:this.state.subscribers}))}}]),t}(n.Component);m.a.render(s.a.createElement(p,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.488f5c4d.chunk.js.map