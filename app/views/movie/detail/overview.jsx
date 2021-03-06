//librairies
import React, {PropTypes} from 'react';

// web components
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';
import {component as Button} from 'focus-components/common/button/action';
import {component as Modal} from 'focus-components/application/popin';
import {translate} from 'focus-core/translation';

//stores & actions
import movieStore from '../../../stores/movie';

//custom components
import Trailer from '../components/trailer';

export default React.createClass({
    displayName: 'Overview',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /**
     * Open the trailer popin.
     */
    openTrailerPopin() {
        this.refs['modal-trailer'].toggleOpen();
    },
    // pourcentage de complétude<br/>
    // {userRating}<br/>
    // {pressRating}<br/>
    /** @inheritDoc */
    renderContent() {
        const {code, pressRating, trailerName, trailerHRef, userRating} = this.state;
        const url = `http://www.allocine.fr/film/fichefilm_gen_cfilm=${code}.html`;
        return (
            <Panel title='movie.detail.overview' data-demo='overview'>
                <Button label={translate('movie.action.watchTrailer')} type='button' handleOnClick={this.openTrailerPopin} />
                <Button label={translate('movie.action.consult.allocine')} type='button' handleOnClick={() => window.open(url,'_blank')} />
                <Modal ref="modal-trailer">
                    <Trailer url={trailerHRef} />
                </Modal>
            </Panel>
        );
    }
});
