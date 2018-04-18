import PropTypes from 'prop-types';
import React from 'react';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import ui from 'universal/styles/ui';
import RetroDiscussionTopic from 'universal/modules/email/components/RetroDiscussionTopics/RetroDiscussionTopic';

const fontFamily = ui.emailFontFamily;

const sectionHeading = {
  fontFamily,
  fontSize: '24px',
  fontWeight: 600,
  textAlign: 'center'
};

const RetroDiscussionTopics = (props) => {
  const {
    imageSource,
    topics
  } = props;

  return (
    <table style={ui.emailTableBase} width="100%">
      <tbody>
        <tr>
          <td style={sectionHeading}>
            <EmptySpace height={16} />
            {'Upvoted Reflections'}
            <EmptySpace height={16} />
          </td>
        </tr>
        <tr>
          <td>
            {topics.map((topic) => <RetroDiscussionTopic key={topic.id} imageSource={imageSource} topic={topic} />)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

RetroDiscussionTopics.propTypes = {
  imageSource: PropTypes.oneOf([
    'local',
    'static'
  ]),
  topics: PropTypes.array
};

export default RetroDiscussionTopics;