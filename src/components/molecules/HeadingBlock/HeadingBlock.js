import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Title from 'components/atoms/Title/Title';
import SubTitle from 'components/atoms/Subtitle/Subtitle';

const HeadingBlock = ({ title, subtitle, ...props }) => (
  <Box mt={10} mx={7.5}>
    <Title {...props}>{title}</Title>
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
  </Box>
);

HeadingBlock.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

HeadingBlock.defaultProps = {
  subtitle: '',
};

export default HeadingBlock;
