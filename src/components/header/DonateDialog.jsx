import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  PaypalIcon,
  MpesaIcon,
  EthereumIcon,
  CreditCardIcon,
} from '../icons/donate';

import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  headingAccordion: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  textHelpDialog: {
    marginTop: theme.spacing(3),
  },
}));

function PaymentsAccordion() {
  const classes = useStyles();

  const paymentProviders = [
    {
      icon: <PaypalIcon />,
      title: 'Paypal (Coming Soon)',
      description: 'Coming soon.',
      disabled: true,
    },
    {
      icon: <MpesaIcon />,
      title: 'M-pesa (Coming Soon)',
      description: 'Coming soon.',
      disabled: true,
    },
    {
      icon: <EthereumIcon />,
      title: 'Ethereum',
      description: (
        <div style={{ textAlign: 'center', maxWidth: '100%' }}>
          <img
            src="/images/donate/ethereum.png"
            alt="0x145dE912ef6077612f3fCead25173DC81cF136e1"
            style={{ maxWidth: '100%' }}
          />
          <Typography noWrap>
            0x145dE912ef6077612f3fCead25173DC81cF136e1
          </Typography>
        </div>
      ),
      disabled: false,
    },
    {
      icon: <CreditCardIcon />,
      title: 'Other (Coming Soon)',
      description: 'Coming soon.',
      disabled: true,
    },
  ];

  const paymentList = paymentProviders.map((provider) => (
    <Accordion key={provider.title} disabled={provider.disabled}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item>{provider.icon}</Grid>
          <Grid item xs zeroMinWidth>
            <Typography className={classes.headingAccordion} noWrap>
              {provider.title}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>{provider.description}</AccordionDetails>
    </Accordion>
  ));

  return <div>{paymentList}</div>;
}

export function DonateDialog({ open, onClose }) {
  const classes = useStyles();
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>Donate</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" paragraph>
          Thank you for donating to CWRA.
        </Typography>

        <PaymentsAccordion />

        <Typography
          variant="body2"
          paragraph
          className={classes.textHelpDialog}
        >
          Have questions? <Link href="/contact-us">Get in touch</Link>
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default function DonateButton() {
  const [openDonateDialog, setOpenDonateDialog] = useState(false);

  const handleClickOpenDonateDialog = () => {
    setOpenDonateDialog(true);
  };

  const handleCloseDonateDialog = () => {
    setOpenDonateDialog(false);
  };

  return (
    <div>
      {/* Donate Button */}
      <Button
        color="inherit"
        size="small"
        variant="outlined"
        onClick={handleClickOpenDonateDialog}
      >
        Donate
      </Button>

      {/* Donate Dialog */}
      <DonateDialog open={openDonateDialog} onClose={handleCloseDonateDialog} />
    </div>
  );
}
