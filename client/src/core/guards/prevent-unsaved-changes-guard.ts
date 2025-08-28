import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ConfirmDialogService } from '../services/confirm-dialog-service';
import { MemberProfile } from '../../features/members/member-profile/member-profile';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberProfile> = (
  component
) => {
  if (component.editForm?.dirty) {
    const confirmDialog = inject(ConfirmDialogService);
    return confirmDialog.confirm(
      'Are you sure you want to continue? All unsaved changes will be lost'
    );
  }
  return true;
};
