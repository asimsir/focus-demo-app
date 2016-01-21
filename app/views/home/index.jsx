import React from 'react';
import Backbone from 'backbone';
import {application} from 'focus-core';
const {confirm} = application;

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//cartridge configuration
import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';
import {component as Button} from 'focus-components/common/button/action';
import {component as Modal} from 'focus-components/application/popin';

export default React.createClass({
    displayName: 'HomeView',
    mixins: [cartridgeBehaviour],
    popinOpener (ref) {
        const self = this;
        return (event) => {
            event.preventDefault();
            self.refs[ref].toggleOpen();
        }
    },
    /** @inheritDoc */
    componentWillMount() {
        this._registerCartridge();
    },

    /** @inheritDoc */
    _navigateAdvancedSearch() {
        Backbone.history.navigate('#search/advanced', true);
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        return {
            summary: {
                component: SummaryPageSearch,
                props: { onSearchCriteriaChange: this._navigateAdvancedSearch }
            },
            cartridge: {
                component: CartridgePageSearch,
                props: { onSearchCriteriaChange: this._navigateAdvancedSearch }
            },
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <div>
                <p><a onClick={() => Backbone.history.navigate('movies/10053', true)}>Movie 10053</a></p>
                <p><a onClick={() => Backbone.history.navigate('persons/10', true)}>Person 10</a></p>
                <p><a onClick={() => confirm('Hey there do you want to continue?').then(() => console.log('OK')).catch(()=> console.log('KO'))}> Confirm with string</a></p>
                <p><a onClick={() => confirm(()=> <span>Hey there this is a component</span>).then(() => console.log('OK')).catch(()=> console.log('KO'))}> Confirm with component</a></p>

                <Button handleOnClick={this.popinOpener('popin1')} label='Popin' />
                <Modal ref='popin1' type='from-right' level='1'>
                    <Button handleOnClick={this.popinOpener('popin2')} label='Popin' />
                    <FakeContent />
                    <Modal ref='popin2' level='2' type='from-right'>
                     popin2
                    </Modal>
                </Modal>
            </div>
        );
    }
});

const FakeContent = React.createClass({
    displayName: 'FakeContent',
    render() {
        return (
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui,
                vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus.
                In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum,
                ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum.
                Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar
                semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel
                tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin
                lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies
                velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus.
                Vivamus quam lectus, finibus in gravida id, auctor semper libero. Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in.
                Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis condimentum, turpis non aliquam bibendum, ligula ex convallis dui, vel tincidunt ipsum risus et lacus. Vivamus quam lectus, finibus in gravida id, auctor semper libero.
                Cras lacinia dapibus erat facilisis vestibulum. Suspendisse aliquam sollicitudin lorem, eu ultricies velit malesuada in. Nunc at eros id erat gravida tincidunt. Nulla id ornare sem, nec mattis
                lacus. In ex libero, pulvinar semper nisl ut, pulvinar facilisis nisl.
            </p>
        );
    }
});
