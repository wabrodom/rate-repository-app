import Text from "./Text";

const Heading = ({ style, ...props}) => {
  const headingStyle = [ style ];
   
  return <Text fontSize='heading' fontWeight='bold' style={headingStyle} {...props} />
}

export default Heading;