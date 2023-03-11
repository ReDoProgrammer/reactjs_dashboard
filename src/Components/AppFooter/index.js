import {Typography} from 'antd';
function AppFooter() {
    return (  <div className="AppFooter">
        <Typography.Link href='tel:+84911397764'>+84911397764</Typography.Link>
        <Typography.Link href='https://www.facebook.com/' target={'_blank'}>Private Policy</Typography.Link>
        <Typography.Link href='https://www.facebook.com/' target={'_blank'}>Terms Of Use</Typography.Link>
    </div>);
}

export default AppFooter;