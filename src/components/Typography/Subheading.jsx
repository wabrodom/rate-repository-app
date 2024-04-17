import Text from "./Text";

const Subheading = ({ style, ...props}) => {
  const subheadingStyle = [ style ];
   
  return <Text fontSize='subheading' fontWeight='bold' style={subheadingStyle} {...props} />
}

export default Subheading;